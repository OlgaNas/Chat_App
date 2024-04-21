import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
            <BiLogOut onClick={logout} className='text-white cursor-pointer w-6 h-6 hover:text-gray-200 active:text-gray-400' alt="logout" title="LogOut" />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
  
}

export default LogoutButton;