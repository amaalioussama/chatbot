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
const { OpenAI ,Configuration} = require("openai");
const  Chatuser = require('./models/Chatuser');

const openai = new OpenAI({
  apiKey: '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' 
});

const app = express();
app.use(express.json());
app.use(cors());
app.post("/generate", async (req, res) => {
  const promptString = req.body.prompt;
  if (!promptString) {
    return res.status(400).json({ error: "You need a prompt" });
  }
  try {
    const aiResponse = await openai.image.create({
      prompt: `${promptString}`,
      n: 1,
      size: "512x512",
    });
    const imageUrl = aiResponse.data.data[0].url;
    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An internal server error occurred" });
  }
});

mongoose.connect("mongodb://127.0.0.1:27017/users");
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};
function generateToken(userId) {

  const token = jwt.sign({ userId }, 'secret', { expiresIn: '30d' }); 
  return token;
}
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

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
  
      res.json({ message: 'Valid login', token: token, username: user.username });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  });
  
  app.post('/logout', (req, res) => {
    res.clearCookie('jwttoken');
    res.json({ message: 'Logged out successfully' });
  });



app.get('/user', authenticateToken, async (req, res) => {
  try {
  
    const userId = req.user.userId;
    const user = await UsersModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ username: user.username });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred while fetching user information' });
  }
});
app.post('/savechat', async (req, res) => {
  try {
    const { userId, userInput, chatHistory } = req.body;

    const user = await UsersModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newChatMessage = new Chatuser({ user: userId, userInput, chatHistory });
    await newChatMessage.save();
    res.status(200).json({ message: 'Chat history saved successfully' });
  } catch (error) {
    console.error('Error saving chat history:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

   

app.listen(3001, () => {
  console.log("Connected at http://localhost:3001");
});