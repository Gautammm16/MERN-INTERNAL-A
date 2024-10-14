import Receipe from "../model/Recepie.js";
import express from "express";

const router = express.Router();

router.get("/getall",async(req,res)=>{
    const getAlldata =await Receipe.find();
    if(!getAlldata) return res.json({message:"no data found"})
        res.json(getAlldata)
})


router.post("/create",async(req,res)=>{
        const createall = await Receipe.create(req.body);
        if(!createall) return res.json({message:"data not created"})
            res.json(createall);
})

router.put("/update/:id",async(req,res)=>{
    const update =await Receipe.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidator:true})
    if(!update) return res.json({message:"no receipe found"})
        res.json(update)
})

router.delete("/delete/:id",async(req,res)=>{
    const del =await Receipe.findOneAndDelete(req.params.id);
    if(!del) return res.json({message:"not deleted"});
    res.json({message:"data deleted Successfully"});

})


router.search("/search:id",(req,res)=>{
    
})

export default router;