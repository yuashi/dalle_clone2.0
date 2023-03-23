import express from "express";
import { dalleimages } from "../controllers/dalle.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from DALLE-E");
});

router.post("/", dalleimages);

export default router;
