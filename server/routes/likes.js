import express from "express";
import { addLike, deleteLike, getLikes } from "../controllers/like.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getLikes);

router.post("/", verifyToken, addLike);

router.delete("/", verifyToken, deleteLike);

export default router;
