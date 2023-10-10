import express from "express";
import { addComment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getComments);

router.post("/", verifyToken, addComment);

export default router;
