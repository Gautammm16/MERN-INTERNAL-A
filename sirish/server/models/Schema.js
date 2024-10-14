import mongoose from "mongoose";

const ReceipeSchema = new mongoose.Schema({
    name:String,
    timetaken:String,
    category:String
})

export default mongoose.model("receipe",ReceipeSchema)
