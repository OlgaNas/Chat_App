import React, {useState} from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className='md:hidden block p-2 bg-gray-700 bg-opacity-50 text-white z-50'
        onClick={toggleSidebar}
      >
          Users
      </button>
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-transparent w-64 md:w-64 border-r border-slate-500 p-4 flex flex-col`}>
        <SearchInput/>
        <div className='flex-1 overflow-y-auto'><Conversations /></div>
        <LogoutButton className='mt-auto z-51'/>
    </div>
    
    </>
  )
};




// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput />
//         <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

export default Sidebar