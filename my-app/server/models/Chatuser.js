const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatuserSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  userInput: String,
  chatHistory: [{ role: String, content: String }]
});

const Chatuser = mongoose.model('Chatuser', chatuserSchema);
module.exports = Chatuser;
