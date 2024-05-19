import React, {useEffect} from 'react';
import {useSocketContext} from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/sounds/sound_notification.mp3';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation(); 

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            //when there is a new incoming message the sound will play and the new message will shake
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });
        return () => socket?.off("newMessage");//clean up function
    }, [socket, setMessages, messages,]);
};

export default useListenMessages