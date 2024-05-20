import path from "path";
import express from "express";//Express Server - better performance in applications that handle a lot of concurrent connections and I/O operations, such as real-time applications
import dotenv from "dotenv";
import cookieParser from "cookie-parser";//The cookie-parser middleware is used to parse Cookie header and populate req.cookies with an object keyed by the cookie names

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from './socket/socket.js';

//const app = express(); // we relocated app to socket.js for instant messages implantation 
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); //for deployment

dotenv.config(); //to load environment variables from a .env file into process.env. 
app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser()); //This tells Express to use the cookie-parser on every request, which parses any cookies attached to the client's request

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist"))); //for deployment

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));//This is typically used for single-page applications (SPAs) to serve the main HTML file for all routes, allowing the client-side routing to handle the rest.
})



server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});