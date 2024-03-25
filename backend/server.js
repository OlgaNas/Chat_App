import express from "express";//Express Server - better performance in applications that handle a lot of concurrent connections and I/O operations, such as real-time applications
import dotenv from "dotenv";
import cookieParser from "cookie-parser";//The cookie-parser middleware is used to parse Cookie header and populate req.cookies with an object keyed by the cookie names
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config(); //to load environment variables from a .env file into process.env. 
app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser()); //This tells Express to use the cookie-parser on every request, which parses any cookies attached to the client's request

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello world!!!");
// });




app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});