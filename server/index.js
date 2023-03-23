import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postroutes from "./routes/postroutes.js";
import dalleroutes from "./routes/dalleroutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postroutes);
app.use("/api/v1/dalle", dalleroutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E !");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server is up and running at localhost:8080...")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
