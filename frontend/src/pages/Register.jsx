// import axios from 'axios'
// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AppContext } from '../context/AppContextProvider'

// const Register = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate()
//   const { backendUrl, setToken, loadUserProfileData } = useContext(AppContext)

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
//       const { data } = response;

//       if (data.success) {
//         toast.success('Account created successfully!');
//         localStorage.setItem('token', data.token);
//         setToken(data.token);
//         await loadUserProfileData(data.token);
//         navigate('/');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Something went wrong. Please try again!");
//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//         <p className='text-2xl font-semibold'>Create Account</p>
//         <p>Please sign up to book an appointment</p>

//         <div className='w-full'>
//           <p>Full Name</p>
//           <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
//         </div>

//         <div className='w-full'>
//           <p>Email</p>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
//         </div>

//         <div className='w-full'>
//           <p>Password</p>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
//         </div>

//         <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>Create account</button>

//         <p>Already have an account? <Link to="/login" className='text-primary underline'>Login here</Link></p>
//       </div>
//     </form>
//   )
// }

// export default Register;
