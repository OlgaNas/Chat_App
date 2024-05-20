import React, { createContext, useState, useEffect, useContext } from 'react'; //Context in React is designed to share data that can be considered "global" for a tree of React components
import { useAuthContext } from './AuthContext';
import io from "socket.io-client"; //a JavaScript library that enables real-time, bidirectional, and event-based communication between web clients and servers.

const SocketContext = createContext();
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level. 
    //It is especially useful when some data needs to be accessible by many components at different nesting levels.

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser) {
            const socket = io("https://chat-app-prod-2ey2.onrender.com", {
                query: {
                    userId: authUser._id
                }
            });//back-end url
            
            setSocket(socket);
            //socket.on() is used to listen to the events. Can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();//close socket connection when component unmount
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);//Whenever authUser changes, run this useEffect

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}