import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            //send username and password to backend
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({username, password})
            });
            //get data from database based on username and password
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            //save the loged in user to the browser's local storage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // Update the global state with the authenticated user's data
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message)
            
        } finally {
            setLoading(false);
        }
    }
    return {loading, login};
  
}

export default useLogin;


function handleInputErrors(username, password) {
    if(!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
}