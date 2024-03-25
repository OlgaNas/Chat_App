import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({error: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password"); //-password means that the password field should be excluded from the fetched user document. This is a security best practice to prevent sensitive information like passwords from being sent to the client 

        if(!user) {
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;//Attaching the user object to the req object makes the user's information readily available throughout the entire lifecycle of the request.

        next(); //call next function, sendMessage function in message.routes.js

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error "});
    }
}

export default protectRoute;