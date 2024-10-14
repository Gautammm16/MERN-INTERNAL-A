import mongoose from "mongoose";

const receipeSchema = new mongoose.Schema({
    name: { type: String },
  ingredients: { type: String },
  instructions: { type: String },
  preparationTime: { type: String },
  category: { type: String }

})

export default mongoose.model("recepie",receipeSchema);