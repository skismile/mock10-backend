require("dotenv").config()
const mongoose=require("mongoose")
const express=require('express')
const cors=require("cors")
const UserRouter=require("./Router/User.Router")
const EmiRouter=require("./Router/Emi.Router")
const app=express()
const PORT=process.env.PORT||8080
const MONGO_URL=process.env.MONGO_URL
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use(express.json())
app.use("/user",UserRouter)
app.use("/emicalc",EmiRouter)
app.get('/',(req,res)=>{res.send('hello')})
mongoose.set("strictQuery", false);
 

mongoose.connect(MONGO_URL,()=>{

    
    app.listen(PORT,()=>{console.log('server is runing on port 8080')})
})