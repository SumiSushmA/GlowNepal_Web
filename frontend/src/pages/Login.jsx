// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AppContext } from '../context/AppContextProvider'

// const Login = () => {
//   const [state, setState] = useState('Sign Up')
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate()
//   const { backendUrl, token, setToken, loadUserProfileData } = useContext(AppContext)

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       let response;
//       if (state === 'Sign Up') {
//         response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })
//       } else {
//         response = await axios.post(`${backendUrl}/api/user/login`, { email, password })
//       }

//       const { data } = response;

//       if (data.success) {
//         toast.success(state === 'Sign Up' ? 'Account created successfully!' : 'Logged in successfully!');
//         localStorage.setItem('token', data.token);
//         setToken(data.token);
        
//         // await loadUserProfileData(data.token); // Load user profile after setting token
//       } else {
//         toast.error(data.message);
//       }

//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Something went wrong. Please try again!");
//     }
//   }

//   useEffect(() => {
//     if (token && !email) { // Ensures navigation only after profile is loaded
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//         <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
//         <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

//         {state === 'Sign Up' && (
//           <div className='w-full'>
//             <p>Full Name</p>
//             <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
//           </div>
//         )}

//         <div className='w-full'>
//           <p>Email</p>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
//         </div>

//         <div className='w-full'>
//           <p>Password</p>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
//         </div>

//         <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>
//           {state === 'Sign Up' ? 'Create account' : 'Login'}
//         </button>

//         {state === 'Sign Up' ? (
//           <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
//         ) : (
//           <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign up here</span></p>
//         )}
//       </div>
//     </form>
//   )
// }

// export default Login;


import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContextProvider';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken, loadUserProfileData } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (state === 'Sign Up') {
        response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      }

      const { data } = response;

      if (data.success) {
        toast.success(state === 'Sign Up' ? 'Account created successfully!' : 'Logged in successfully!');
        localStorage.setItem('token', data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again!");
    }
  };

  useEffect(() => {
    if (token && !email) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>

        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        ) : (
          <>
            <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign up here</span></p>
            <p>Wanna Recover Password? <span onClick={() => navigate('/password-forgot')} className='text-primary underline cursor-pointer'>Recover Password here</span></p>
          </>
        )}
      </div>
    </form>
  );
};

export default Login;
