const express=require("express");
const app=express();
const port =8080;
const mongoose = require('mongoose');

///const  router = express.Router()

const apiRouter=require("./routers/apiRoutes");
const secondaryRouter=require("./routers/secondaryRouter");

app.use("/api",apiRouter);
app.use("/secondary",secondaryRouter);


// Routes ---->

// HTTP VERBS ---PUT POST GET --->

app.use(express.json());
app.use(express.urlencoded({extended:false}));





app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`);

    mongoose.connect('mongodb://localhost:27017/myemptydb').then(data=>{
    console.log("Connected With Mongodb")
})
   
})


