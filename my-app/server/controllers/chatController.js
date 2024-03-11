const ChatModel = require('../models/chatSchema');
const jwt = require('jsonwebtoken');

const saveChat = async (req, res) => {
    try {
        const { userInput, assistantResponse, time } = req.body;
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'secret'); // Verify and decode the JWT token
        const userId = decodedToken.userId; // Extract the user ID from the decoded token
        const assistantResponseString = assistantResponse.join('\n');
        const newChat = await ChatModel.create({
            userInput,
            assistantResponse: assistantResponseString,
            time,
            userId
        });

        res.status(201).json({ message: 'Chat data saved successfully' });
    } catch (error) {
        console.error('Error saving chat data:', error);
        res.status(500).json({ error: 'An error occurred while saving chat data' });
    }
};

module.exports = {
    saveChat
};
