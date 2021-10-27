const express=require("express");
const  router = express.Router();


router.get("/",(req,res)=>{
    res.json({message:"I am from secondary Router"});
})


router.get("/alpha",(req,res)=>{
    res.json({message:"I am from secondary Router alpha"});
})

module.exports=router;
