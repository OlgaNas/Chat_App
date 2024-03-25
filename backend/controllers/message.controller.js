import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

//SEND Message
//-------------------------------------------------------------------------------------------------------------
export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body; //we getting a message from an user as an input
        const {id: receiverId} = req.params; //creating a new variable named receiverId and assigning to it the value of req.params.id
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }, //This query attempts to find a single document within the Conversation collection where the participants field includes both senderId and receiverId. 
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id); //if newMessage created push it to conversation messages array
        }

//SOCKET IO FUNCTIONALITY WILL GO HERE

        //save to database
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]); //both methods/promises will run simultaneously so the app will be faster

        //send respond to the frontend
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

//GET Message
//-------------------------------------------------------------------------------------------------------------
export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id; //it comes from protectRote.js
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages"); //The populate("messages") method in Mongoose is used to automatically replace the specified paths in the document with document(s) from other collection(s)

        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"}); 
    }
}