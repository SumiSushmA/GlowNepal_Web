import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AdminContext } from './context/AdminContext';
import { StylistContext } from './context/StylishContext';
import AddStylist from './pages/Admin/AddStylist';
import AllAppointments from './pages/Admin/AllAppointments';
import Dashboard from './pages/Admin/Dashboard';
import StylistsList from './pages/Admin/StylistsList';
import Login from './pages/Login';
import StylistAppointments from './pages/Stylists/StylistAppointments';
import StylistDashboard from './pages/Stylists/StylistDashboard';
import StylistProfile from './pages/Stylists/StylistProfile';

const App = () => {

  const { sToken } = useContext(StylistContext);
  const { aToken } = useContext(AdminContext);

  return sToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-stylist' element={<AddStylist />} />
          <Route path='/stylist-list' element={<StylistsList />} />
          <Route path='/stylist-dashboard' element={<StylistDashboard />} />
          <Route path='/stylist-appointments' element={<StylistAppointments />} />
          <Route path='/stylist-profile' element={<StylistProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  );
};

export default App;
