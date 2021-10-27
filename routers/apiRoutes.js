const express=require("express");
const  router = express.Router()
const User=require("../schemas/User");



router.post("/user",(req,res)=>{

    const data=req.body;

    console.log(data);

   

    const user=new User(data);

    user.save().then(result=>{
        res.json({status:"Success",response:result});


    }).catch(err=>{
        res.json({status:false,error:err.message});
    })

})

router.put("/:id",(req,res)=>{

    const data=req.body;
    const obj = Object.assign({},req.body)
   
    //console.log(data);

    console.log(obj);

    User.updateOne({_id:req.params.id},{$set:obj}).then(data=>{
        res.json({status:"Success",data:data});
    }).catch(err=>{
        res.json({error:err});
    })

})

router.patch("/:id",(req,res)=>{

    const data=req.body;
    const [key,value]=Object.entries(data)[0];
    console.log(key);
    console.log(value);
 

    User.updateOne({_id:req.params.id},{$set:{[key]:value}}).then(data=>{
        res.json({status:"Success",data:data});
    }).catch(err=>{
        res.json({error:err});
    })

})


router.get("/:id?",(req,res)=>{
    console.log(req.method);
    //console.log(req.params);
    //console.log(req.query);

    //const params=req.params.id;

    User.findOne({_id:req.params.id}).then(data=>{
        /// _id --->  ObjectId

        res.json({status:"Success",user:data});



    })


})

router.delete("/:id",(req,res)=>{
    console.log(req.method);

    User.deleteOne({_id:req.params.id}).then(data=>{

        res.json({status:"Deleted",data:data});

    }).catch(err=>{
        res.json({status:"Failed",data:err});

    })

})

module.exports=router;