import mongoose from "mongoose"; //Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js.

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
}
export default connectToMongoDB;