import React, { useState } from 'react'
import { GrSend } from "react-icons/gr";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }


  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input 
                type='text'
                className='px-2 border text-sm rounded-lg block w-full bg-gray-700 border-gray-600 text-white'
                placeholder='Send a message'
                value = {message}
                onChange={(e) => setMessage(e.target.value)}
                /> 
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-gray-200 hover:text-gray-300 active:text-gray-400'>
                {loading ? <div className='loading loading-spinner'></div> : <GrSend />}
            </button>
        </div>     
    </form>
  )
}

export default MessageInput

// Starter Code
// const MessageInput = () => {
//     return (
//       <form className='px-4 my-3'>
//           <div className='w-full relative'>
//               <input 
//                   type='text'
//                   className='px-2 border text-sm rounded-lg block w-full bg-gray-700 border-gray-600 text-white'
//                   placeholder='Send a message'
//                   /> 
//               <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-gray-200 hover:text-gray-300 active:text-gray-400'>
//                   <GrSend />
//               </button>
//           </div>
             
  
//       </form>
//     )
//   }
  
//   export default MessageInput