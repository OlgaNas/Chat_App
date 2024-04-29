import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    //cleanup function ("unmounting" - the removal of a component from the DOM)
    return () => setSelectedConversation(null);
  }, []);
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {!selectedConversation ? (
      <NoChatSelected />
    ) : (
        <>
        {/* Header */}
            <div className='bg-success px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
        <Messages />
        <MessageInput /> 
        </>
    )}
    </div>
  )
};


export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full text-white'>
      <div className='flex flex-col items-center justify-center'>
        <p>Welcome 👋 Name Surname 😊</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}


// STARTER CODE
//const MessageContainer = () => {
    // return (
    //     <div className='md:min-w-[450px] flex flex-col'>
    //         <>
    //         {/* Header */}
    //             <div className='bg-success px-4 py-2 mb-2'>
    //                 <span className='label-text'>To:</span>{" "}
    //                 <span className='text-gray-900 font-bold'>Name Surname</span>
    //             </div>
    //         </>
    //         <Messages />
    //         <MessageInput />
    //     </div>
    //   )
    // }