import express from "express";
import mongoose from "mongoose";
import ReceipeRoutes from "./routes/Recepie.Routes.js";
import cors from "cors";

const port = 3000
const app = express();

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/examquestion");
const db = mongoose.connection;

db.once("open",()=>{
    console.log("database connection established");
})

app.use(cors(origin="http://localhost:5173"));
app.use("/api",ReceipeRoutes);


app.listen(port,()=>{
    console.log("connection established");
})

