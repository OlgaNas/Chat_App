import { create } from 'zustand'
//Zustand is a state management solution for React that uses hooks and allows you to create global state with a very simple and intuitive API.

// Create a Zustand store for managing conversations and messages.
const useConversation = create((set) => ({
    selectedConversation: null, // State for the currently selected conversation
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages})
}));

export default useConversation;