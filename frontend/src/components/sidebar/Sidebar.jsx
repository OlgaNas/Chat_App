import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 flex flex-col'>
        <SearchInput />
        {/* Divider will be used to separate content vertically or horizontally. */}
        {/* <div className='divider px-3'></div> */}
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar