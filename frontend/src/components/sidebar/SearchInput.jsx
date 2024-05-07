import {React, useState} from 'react'
import { FiSearch } from "react-icons/fi";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
     return toast.error('Search term must be at least 3 character long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    console.log(conversation);
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 m-3 mb-5'>
     
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full h-10 bg-gray-300' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
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