const mongoose=require("mongoose")
const express=require('express')
const UserRouter=require("./Router/User.Router")
const EmiRouter=require("./Router/Emi.Router")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT||8080
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use(express.json())
app.use("/user",UserRouter)
app.use("/emicalc",EmiRouter)
app.get('/',(req,res)=>{res.send('hello')})

 

mongoose.connect("mongodb+srv://skismile:7867@cluster0.qqyyxrv.mongodb.net/?retryWrites=true&w=majority",()=>{

    
    app.listen(PORT,()=>{console.log('server is runing on port 8080')})
})