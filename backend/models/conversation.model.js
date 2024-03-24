import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [], //push message id here when we create messages
        }
    ]
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;