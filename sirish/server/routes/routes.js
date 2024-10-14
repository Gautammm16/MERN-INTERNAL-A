import express from "express";
import Rec from "../models/Schema.js";

const router = express.Router();

router.get("/allreceipe",async(req,res)=>{
    const getllall = await Rec.find();
    if(!getllall) return res.json({message:"records not found"})
        res.json(getllall)

})

router.post("/createrec",async(req,res)=>{
    const createrec = await Rec.create(req.body);
    if(!createrec) return res.json({message:"not created"})
        res.json(createrec)


})
router.put("/updaterec/:id",async(req,res)=>{
    const updaterec = await Rec.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidator:true});
    if(!updaterec) return res.json({message:"not found"})
        res.json(updaterec)

})
router.delete("/delete/:id",async(req,res)=>{
    const del = await Rec.findByIdAndDelete(req.params.id);
    if(!del) return res.json({message:"not deleted"})
        res.json(del)
})



export default router;
