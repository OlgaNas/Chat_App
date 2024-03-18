import mongoose from "mongoose"; //Mongoose is a JavaScript library that provides a straight-forward, schema-based solution to model your application data with MongoDB

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", userSchema); //Mongoose will look for or create (if it doesn't already exist) a collection named users in the database
export default User;
