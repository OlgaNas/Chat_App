import React from 'react'
import { FiSearch } from "react-icons/fi";


const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 m-3 mb-5'>
     
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full h-10 bg-gray-300' />
        <button type='submit' className='btn btn-circle btn-sm bg-success text-white hover:text-gray-900 '>
            <FiSearch />
        </button>
      
    </form>
  )
}

export default SearchInput

// STARTER CODE
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 m-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-success text-white'>
//             <FiSearch />
//         </button>
//     </form>
//   )
// }