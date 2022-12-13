const express = require("express");
const app = express.Router();
const UserModel = require("../Model/User.Model");

app.get("/", async (req, res) => {
  console.log("user")
  res.send("USER");
});

// Signup route

app.post("/signup",async(req,res)=>{

  const { name, email, password } = req.body;
  
  try{
    const user = new UserModel({
                name,
                email,
                password,
              });
              await user.save();
              console.log(user);
              return res.send("user created successfully");
            } catch (err) {
              console.log(err);
              return res.status(401).send("invalid cred");
   
  }


  
})


// app.post("/signup", async (req, res) => {
//   console.log("signup")
//   const { name, email, password } = req.body;

//   try {
//     const checkEmail = await UserModel.findOne({ email });
//     if (checkEmail) {
//       return res.status(401).send("User email already exist");
//     } else {
//       try {
//         const user = new UserModel({
//           name,
//           email,
//           password,
//         });
//         await user.save();
//         console.log(user);
//         return res.send("user created successfully");
//       } catch (err) {
//         console.log(err);
//         return res.status(401).send("invalid cred");
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     res.status(401).send(e.message);
//   }
// });

// //Signin Route
// app.post("/signin", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email, password });

//     return res.send({
//       message: "login Successfully",
//       name: user.name,
//       email: user.email,
//       id: user._id,
//       date: user.date,
//     });
//   } catch (e) {
//     return res.status(401).send("invalid credential");
//   }
// });

module.exports = app;
