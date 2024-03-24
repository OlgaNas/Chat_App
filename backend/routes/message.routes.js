import express from "express";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);//protectRoute is a middleware

export default router;