import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {loading, login} = useLogin();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login 
            <span className='text-green-500 shadow-text'> ChatApp</span></h1>

            <form className='mt-5' onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base-200 label-text'>Username</span>
                    </label>    
                    <input 
                        type='text' 
                        placeholder='Enter username' 
                        className='w-full input input-bordered h-10'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base-200 label-text'>Password</span>
                    </label>  
                    <input 
                        type='password' 
                        placeholder='Enter password' 
                        className='w-full input input-bordered h-10'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </div>
                <Link to='/signup' className='p-1 text-sm text-base-200 hover:underline hover:text-blue-200 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <div>
                <button className='btn btn-block btn-sm mt-3 border-0 hover:bg-green-500' 
                        disabled={loading}
                        type="submit">
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login



//STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>Login 
//               <span className='text-green-500'> ChatApp</span></h1>
  
//               <form>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base-200 label-text'>Username</span>
//                       </label>    
//                       <input 
//                           type='text' 
//                           placeholder='Enter username' 
//                           className='w-full input input-bordered h-10'/>
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base-200 label-text'>Password</span>
//                       </label>  
//                       <input 
//                           type='password' 
//                           placeholder='Enter password' 
//                           className='w-full input input-bordered h-10'/>
//                   </div>
//                   <a href='#' className='p-1 text-sm text-base-200 hover:underline hover:text-blue-200 mt-2 inline-block'>
//                       {"Don't"} have an account?
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-3 hover:bg-green-500'>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login
  
  