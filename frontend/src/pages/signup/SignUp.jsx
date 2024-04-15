import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
        <span className='text-green-500 shadow-text'> ChatApp</span></h1>
      
        <form className='mt-5'>
          <div>
            <label className='label p-2'>
              <span className='text-base-200 label-text'>Full Name</span>
            </label>    
            <input 
              type='text' 
              placeholder='Enter full name' 
              className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base-200 label-text'>Username</span>
            </label>    
            <input 
              type='text' 
              placeholder='Enter username' 
              className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base-200 label-text'>Password</span>
            </label>    
            <input 
              type='password' 
              placeholder='Enter password' 
              className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base-200 label-text'>Confirm Password</span>
            </label>    
            <input 
              type='password' 
              placeholder='Confirm password' 
              className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <GenderCheckbox />
          </div>
          <Link to='/login' className='p-1 text-sm text-base-200 hover:underline hover:text-blue-200 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-3 border-0 hover:bg-green-500'>Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp


//STARTER CODE FOR THE SIGNUP COMPONENT
// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
//         <span className='text-green-500'> ChatApp</span></h1>
      
//         <form className='mt-5'>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base-200 label-text'>Full Name</span>
//             </label>    
//             <input 
//               type='text' 
//               placeholder='Enter full name' 
//               className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base-200 label-text'>Username</span>
//             </label>    
//             <input 
//               type='text' 
//               placeholder='Enter username' 
//               className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base-200 label-text'>Password</span>
//             </label>    
//             <input 
//               type='password' 
//               placeholder='Enter password' 
//               className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base-200 label-text'>Confirm Password</span>
//             </label>    
//             <input 
//               type='password' 
//               placeholder='Confirm password' 
//               className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <GenderCheckbox />
//           </div>
//           <a href='#' className='p-1 text-sm text-base-200 hover:underline hover:text-blue-200 mt-2 inline-block'>
//             Already have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-3 border-0 hover:bg-green-500'>Sign Up</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp