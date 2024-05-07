import { Server } from 'socket.io'; //We need socket.io so users do not need to refresh the page to see messages from another user
import http from 'http'; //The http module in Node.js is used to handle HTTP requests and responses.
import express from 'express';

const app = express();
//on top of Express server we put Socket server
const server = http.createServer(app);
const io = new Server(server, {
    cors: { //CORS is a security feature 
        origin: ["http://localhost:3000/"], // specifies which domains are allowed to access this server.
        methods: ["GET", "POST"] // defines which HTTP methods are allowed when accessing the resource.
    }
}); 
//listen for connections
io.on('connection', (socket)=>{
    console.log("A user connected", socket.id);

    //socket.on() is used to listen to the events. Can be used both on client and server side
    socket.on('disconnect', ()=>{
        console.log("User disconnected", socket.id)
    })
})

export {app, io, server};