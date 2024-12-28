import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Stylish from './pages/Stylish'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>

      <Routes>
        <Route path='/' element={<Home />} /> //for home page
        <Route path='/stylish' element={<Stylish />} /> // for stylish page
        <Route path='/stylish/:speciality' element={<Stylish />} /> // for selecting stylish speciality
        <Route path='/login' element={<Login />} /> // for login page
        <Route path='/about' element={<About />} /> // for about us page
        <Route path='/contact' element={<Contact />} /> // for contact us page
        <Route path='/my-profile' element={<MyProfile />} /> // for user profile page
        <Route path='/my-appointments' element={<MyAppointments />} /> //for the user appointment page
        <Route path='/appointment/:stylishId' element={<Appointment />} /> // for showing the stylish appointment page 
      </Routes>
     
    </div>
  )
}

export default App
