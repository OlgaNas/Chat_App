import React, { createContext, useState, useEffect } from 'react'; //Context in React is designed to share data that can be considered "global" for a tree of React components
import { useAuthContext } from './AuthContext';
import io from "socket.io-client"; //a JavaScript library that enables real-time, bidirectional, and event-based communication between web clients and servers.
export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            });//back-end url
            
            setSocket(socket);
            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, []);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}