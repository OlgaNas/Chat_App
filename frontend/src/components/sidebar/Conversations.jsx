import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log("Conversations: ", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {conversations.map((conversation, idx) => (
      <Conversation 
        key={conversation._id}
        conversation={conversation} // people in the database
        emoji={getRandomEmoji()} //next to the conversation will be a random emoji
        lastIdx={idx === conversations.length -1} // for the last conversation we are not showing a divider on the sidebar
      />
    ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
  )
}
//3.21
export default Conversations

//STARTER CODE
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />

//     </div>
//   )
// }
