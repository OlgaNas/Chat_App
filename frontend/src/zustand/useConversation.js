import { create } from 'zustand'
//Zustand is a state management solution for React that uses hooks and allows you to create global state with a very simple and intuitive API.

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages})
}));

export default useConversation;