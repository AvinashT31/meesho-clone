import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();
app.use(morgan("dev"))
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello backend")
})

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("MONGODB connected successfully");
}).catch((error) => {
    return res.send("error while connecting MONGODB")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})

