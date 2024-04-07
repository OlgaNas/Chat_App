import React from 'react';
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return <div className='mt-auto'><BiLogOut className='m-2 text-white cursor-pointer w-6 h-6 hover:text-gray-200 active:text-gray-400' alt="logout" title="LogOut" /></div>
  
}

export default LogoutButton