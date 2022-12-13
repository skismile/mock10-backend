// const express=require('express')
// const app=express()
// const cors=require("cors")
// require("dotenv").config()
// const mongoose=require("mongoose")
// const UserRouter=require("./Router/User.Router")
// const EmiRouter=require("./Router/Emi.Router")
// const PORT=process.env.PORT||8080
// const MONGO_URL=process.env.MONGO_URL
// app.use(express.urlencoded({extended : true}))
// app.use(cors());
// app.use(express.json())
// app.use("/user",UserRouter)
// app.use("/emicalc",EmiRouter)
// mongoose.set("strictQuery", false);
// app.get('/',(req,res)=>{res.send('hello')})
 

// // mongoose.connect(MONGO_URL,()=>{

    
// //     app.listen(PORT,()=>{console.log('server is runing on port 8080')})
// // })
// app.listen(PORT, async () => {
//     await connect(MONGO_URL);
  
//     console.log("server started");
//   });
  



const express = require("express");
const app = express();
const cors = require("cors");
const { connect, mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const userRegister = require("./Router/User.Router");
app.use("/signup", userRegister);
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;
// app.post("/emi", async (req, res) => {
//   let { loanamount, annualinterest, tenure } = req.body;
//   let rate = annualinterest / 12 / 100;
//   rate = rate.toFixed(6);
//   let months = tenure;

//   let EMI =
//     (loanamount * rate * Math.pow(1 + rate, months)) /
//     (Math.pow(1 + rate, months) - 1);
//   EMI = Math.round(EMI);
//   let totalPayment = EMI * months;
//   let interestPayable = totalPayment - loanamount;
//   res.send({ EMI, totalPayment, interestPayable });
// });
app.get("/", (req, res) => {
  res.send("hey home");
});
app.listen(PORT, async () => {
  await connect(MONGOURL);

  console.log("server started");
});