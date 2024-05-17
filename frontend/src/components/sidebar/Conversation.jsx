import React from 'react';
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();//call this hook to get these two values
  
  const isSelected = selectedConversation?._id === conversation._id;
  
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return <>
        <div className={`flex gap-1 items-center hover:glass rounded p-2 py-0 cursor-pointer
              ${isSelected ? "bg-success" : ""}`}
              onClick={() => setSelectedConversation(conversation)}//to change background color
              >
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img 
                src={conversation.profilePic} 
                alt="User avatar" 
              />
            </div>
          </div>
          
          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-100 ps-2'>{conversation.fullName}</p>
              <span className='text-xl'>{emoji}</span>
            </div>
          </div> 
        </div>
        {!lastIdx && <div className='divider my-0 py-0 h-2'/>}
  </>
}

export default Conversation

//STARTER CODE
// const Conversation = () => {
//   return <>
//         <div className='flex gap-1 items-center hover:glass rounded p-2 py-0 cursor-pointer'>
//           <div className="avatar offline">
//             <div className="w-12 rounded-full">
//               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User avatar" />
//             </div>
//           </div>
          
//           <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-100 ps-2'>Full Name</p>
//               <span className='text-xl'>🦜</span>
//             </div>
//           </div> 
//         </div>
//         <div className='divider my-0 py-0 h-2'/>
//   </>
// }
