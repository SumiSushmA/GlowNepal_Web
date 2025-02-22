import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [stylists, setStylists] = useState([]);
    // const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [userData, setUserData] = useState(false);

    // Getting Stylists using API
    const getStylistsData = async () => {
        try {
            // const { data } = await axios.get(backendUrl + '/api/stylist/list');
            const { data } = await axios.get(`${backendUrl}/api/stylist/list`, {
                headers: { utoken: token },
            });
            if (data.success) {
                setStylists(data.stylists);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Getting User Profile using API
    const loadUserProfileData = async () => {
        try {
            // const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } });

            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
                headers: { utoken: token },
            });

            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getStylistsData();
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        }
    }, [token]);

    const value = {
        stylists, getStylistsData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

