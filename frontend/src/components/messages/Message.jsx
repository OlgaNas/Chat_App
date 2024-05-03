import React from 'react';
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  //Check if message is from us or from another user
  const {authUser}= useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-green-900" : "";
  const formattedTime = extractTime(message.createdAt);


  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center">
            {formattedTime}
        </div>
    </div>
  )
}

export default Message

//Start Code
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//             <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//             </div>
//         </div>
//         <div className="chat-bubble bg-green-900">Hello!</div>
//         <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center">
//             12:46
//         </div>
//     </div>
//   )
// }

// export default Message