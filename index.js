const express=require('express')
const app=express()
const cors=require("cors")
require("dotenv").config()
const mongoose=require("mongoose")
const UserRouter=require("./Router/User.Router")
const EmiRouter=require("./Router/Emi.Router")
const PORT=process.env.PORT||8080
const MONGO_URL=process.env.MONGO_URL
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use(express.json())
app.use("/user",UserRouter)
app.use("/emicalc",EmiRouter)
mongoose.set("strictQuery", false);
app.get('/',(req,res)=>{res.send('hello')})
 

mongoose.connect(MONGO_URL,()=>{

    
    app.listen(PORT,()=>{console.log('server is runing on port 8080')})
})

  



