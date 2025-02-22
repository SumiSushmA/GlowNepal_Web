import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContextProvider';

const userRouter = express.Router();

userRouter.post("/forget-password", async (req, res) => {
    try {
        const { email } = req.body;
        const response = await axios.post("/api/user/forget-password", { email });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong. Please try again!" });
    }
});

const PasswordForgot = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [bookings, setBookings] = useState([]);
    const { backendUrl, token } = useContext(AppContext);
    
    // Getting User Bookings Data Using API
    const getUserBookings = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { utoken: token } });
            setBookings(data.bookings.reverse());
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    
    useEffect(() => {
        if (token) {
            getUserBookings();
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/forget-password", { email });
            if (data.success) {
                toast.success(data.message);
                navigate('/home');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong. Please try again!");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="bg-white rounded-lg shadow-lg flex border border-black">
                <div className="w-1/2">
                    <img src={assets.login_image} alt="Forgot Password" className="h-full w-[600px] object-cover rounded-l-lg" />
                </div>
                <div className="w-1/2 p-6 relative">
                    <button onClick={() => navigate('/')} className="absolute top-4 right-4 text-gray-700 text-xl">&times;</button>
                    <img src={assets.logo} alt="Logo" className="mb-5" />
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Forgot Your Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input placeholder="Enter your email" type="email" onChange={(e) => setEmail(e.target.value)} className="w-full pl-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-950" required />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <button type="submit" className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send the link</button>
                            <p className="text-center mt-5 text-gray-600">Remembered the Password? <a href="/" className="text-blue-800 underline">Back to login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { PasswordForgot, userRouter };

