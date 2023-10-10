import express from "express";
import { addRelationship, deleteRelationship, getRelationships } from "../controllers/relationship.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getRelationships);

router.post("/", verifyToken, addRelationship);

router.delete("/", verifyToken, deleteRelationship);

export default router;
