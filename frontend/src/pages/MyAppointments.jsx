import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContextProvider'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [bookings, setBookings] = useState([])
    const [payment, setPayment] = useState('')

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return "Unknown Date";
        const dateArray = slotDate.split('_');
        return `${dateArray[0]} ${months[Number(dateArray[1]) - 1]} ${dateArray[2]}`;
    };


    // Getting User Bookings Data Using API
    const getUserBookings = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
                headers: { utoken: token }
            });

            console.log("API Response:", data);
            if (data && data.appointments && Array.isArray(data.appointments)) {
                console.log("Appointments Array:", data.appointments);
                setBookings([...data.appointments].reverse());
            } else {
                console.error("No appointments found in API response");
                setBookings([]);
            }
        } catch (error) {
            console.error("API Fetch Error:", error);
            toast.error(error.response?.data?.message || "Failed to fetch bookings");
        }
    };



    // Function to cancel a booking using API
    const cancelBooking = async (bookingId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/cancel-booking', { bookingId }, { headers: { utoken: token } })
            if (data.success) {
                toast.success(data.message)
                getUserBookings()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Booking Payment',
            description: "Salon Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { utoken: token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserBookings()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using Razorpay
    const bookingRazorpay = async (bookingId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { bookingId }, { headers: { utoken: token } })
            if (data.success) {
                initPay(data.order)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using Stripe
    const bookingStripe = async (bookingId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { bookingId }, { headers: { utoken: token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            getUserBookings()
        }
    }, [token])

    useEffect(() => {
        console.log("Updated bookings state:", bookings);
    }, [bookings]);

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My Bookings</p>
            <div>
                {bookings && bookings.length > 0 ? (
                    bookings.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                            <div>
                                <img className='w-36 bg-[#EAEFFF]' src={item?.stylistData?.image || assets.defaultImage} alt="Stylist" />
                            </div>
                            <div className='flex-1 text-sm text-[#5E5E5E]'>
                                <p className='text-[#262626] text-base font-semibold'>{item?.stylistData?.name || "Unknown Stylist"}</p>
                                <p>{item?.stylistData?.speciality || "No Speciality Info"}</p>
                                <p className='text-[#464646] font-medium mt-1'>Address:</p>
                                <p>{item?.stylistData?.address?.line1 || "N/A"}</p>
                                <p>{item?.stylistData?.address?.line2 || "N/A"}</p>
                                <p className='mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {slotDateFormat(item?.slotDate)} |  {item?.slotTime || "No Time"}</p>
                            </div>
                            <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                                {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
                                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => bookingStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="Stripe" /></button>}
                                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => bookingRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="Razorpay" /></button>}
                                {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF]'>Paid</button>}
                                {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
                                {!item.cancelled && !item.isCompleted && <button onClick={() => cancelBooking(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Booking</button>}
                                {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Booking Cancelled</button>}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-4">No bookings found</p>
                )}
            </div>
        </div>
    );
};


export default MyAppointments
