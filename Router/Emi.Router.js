const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
   
    res.send("emi");
  });
  
  app.post("/", async (req, res) => {
      let {loan,interest,tenure}=req.body
      let r=interest/12/100
     r=r.toFixed(6)
     let mounths=tenure*12
 
      let { loanamount, interestrate, tenuremonths } = req.body;
      let rate=interestrate/12/100
      rete=rate.toFixed(6)
      let months=tenuremonths
    
      console.log(loanamount, interestrate, tenuremonths,rate,
        months)
      let EMI=loanamount * rate * (Math.pow(1 + rate,months)  )/ ( Math.pow(1 + rate,months)-1 )
       EMI=Math.round(EMI)
      let totalPayment=EMI*months
      let interestPayable=totalPayment-loanamount
      res.send({EMI,totalPayment,interestPayable})
    

  });


  module.exports=app;