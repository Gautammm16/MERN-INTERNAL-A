import express from "express";
import mongoose from "mongoose";
import RecRoute from "./routes/routes.js";
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/db")

const db = mongoose.connection;

db.once("open",()=>{
    console.log("database connected");
})

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",RecRoute);


app.listen(3000,()=>{
    console.log(`server is running`);
})



