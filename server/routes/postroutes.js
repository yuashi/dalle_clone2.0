import express from "express";
import { postimages, getimages } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getimages);

router.post("/", postimages);

export default router;
