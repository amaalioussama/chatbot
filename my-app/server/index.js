const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const UsersModel = require("./models/Users");
const { Sendmail } = require("./helpers/sendmail");
const { emailreg } = require("./helpers/emailreg");
const Token = require("./models/Token");
const crypto =require("crypto");
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");
function generateToken(userId) {
  // Generate a JWT token with user ID as payload
  const token = jwt.sign({ userId }, 'secret', { expiresIn: '30d' }); 
  return token;
}

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};




app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
  
    // Check if the email is already registered
    try {
      const existingUser = await UsersModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }
    } catch (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: "An error occurred while checking email existence" });
    }
  
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
  
    try {
      const newUser = await UsersModel.create({ email, username, password });
      console.log(newUser);
  
      try {
        const generatedToken = await Token.create({
          userId: newUser._id,
          token: crypto.randomBytes(16).toString('hex')
        });
        console.log(generatedToken);
  
        const link = `http://localhost:3001/confirm/${generatedToken.token}`;
        await Sendmail(email, "Welcome 👻", "", emailreg(username, link));
        console.log('Check your email');
  
        res.json(newUser);
      } catch (tokenErr) {
        console.error("Error creating token:", tokenErr);
        res.status(500).json({ error: "An error occurred while creating token" });
      }
    } catch (createErr) {
      console.error("Error creating user:", createErr);
      res.status(500).json({ error: "An error occurred during registration" });
    }
  });
  
  function isValidEmail(email) {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  app.get('/confirm/:token', async (req, res) => {
    try {
      const token = await Token.findOne({ token: req.params.token });
      if (!token) {
        return res.status(404).send("Token not found");
      }
  
      await UsersModel.updateOne({ _id: token.userId }, { $set: { verified: true } });
      await Token.findByIdAndDelete(token._id);
      console.log('email verified');
      res.send("Email verified");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while confirming user" });
    }
  });



  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
    
      const user = await UsersModel.findOne({ email });
  
     
      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }
  
 
      if (user && !user.verified) {
        return res.status(400).json({ error: 'User not verified' });
      }
  
 
      if (user.password !== password) {
        return res.status(400).json({ error: 'Incorrect password' });
      }
  
    
      const token = generateToken(user._id);
  
    
      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
        httpOnly: true,
      });
  
      res.json({ message: 'Valid login', token: token , username: user.username  });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  });
  // Apply middleware to chat route
app.get("/chat", authenticateToken, (req, res) => {
  // Access user information from req.user
  // Implement chat functionality here
  res.json({ message: "Chat functionality goes here" });
});

   

app.listen(3001, () => {
  console.log("Connected at http://localhost:3001");
});