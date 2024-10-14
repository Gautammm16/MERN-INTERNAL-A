import mongoose from "mongoose";

const receipeSchema = new mongoose.Schema({
    name:String,
    ingredeients:String,
    instruction:String,
    preparationTime:String,
    Category:String
})

export default mongoose.model("recepie",receipeSchema);