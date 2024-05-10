import { Server } from 'socket.io'; //We need socket.io so users do not need to refresh the page to see messages from another user
import http from 'http'; //The http module in Node.js is used to handle HTTP requests and responses.
import express from 'express';

const app = express();
//on top of Express server we put Socket server
const server = http.createServer(app);
const io = new Server(server, {
    cors: { //CORS is a security feature 
        origin: ["http://localhost:3000"], // specifies which domains are allowed to access this server.
        methods: ["GET", "POST"] // defines which HTTP methods are allowed when accessing the resource.
    }
}); 

const userSocketMap = {};//{userId: socketId}
//event listener for connections
io.on('connection', (socket)=>{
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId; //the handshake property of a socket object refers to the initial negotiation between the client and the server when a new connection is established. 
    if(userId != "undefined") userSocketMap[userId] = socket.id;
    
    //emitting events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on() is used to listen to the events. Can be used both on client and server side
    socket.on('disconnect', ()=>{
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
})

export {app, io, server};