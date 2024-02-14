const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const UsersModel = require("./models/users");
const { Sendmail } = require("./helpers/sendmail");
const { emailreg } = require("./helpers/emailreg");
const Token = require("./models/Token");
const crypto =require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post('/register', (req, res) => {
  UsersModel.create(req.body)
      .then(async newUser => {
          console.log(newUser);
          const { email, username } = req.body;
          Sendmail(email, "Welcome 👻", "", emailreg(username));
          res.json(newUser);
          try {
              let generatedToken = await Token.create({
                  userId: newUser._id,
                  token: crypto.randomBytes(16).toString('hex')
              });
              console.log(newUser);
            
              console.log(generatedToken);
          } catch (tokenErr) {
              console.error("Error creating token:", tokenErr);
              res.status(500).json({ error: "An error occurred while creating token" });
          }
      })
      .catch(err => {
          console.error("Error:", err);
          res.status(500).json({ error: "An error occurred during registration" });
      });
});
  
app.post('/login' ,(req,res)=>{
      const{email,password}=req.body
      UsersModel.findOne({email: email})
      .then( user=>{
      if(user){
        if(user.password === password){
            res.json('valider')}
        else {
            res.json('the password is incorret')
        }
      } else{
        res.json('user didnt exsit ')
       }
        }

      )
});

app.listen(3001, () => {
  console.log("Connected at http://localhost:3001");
});