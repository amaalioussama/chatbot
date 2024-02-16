const mongoose =require("mongoose")

const UsersSchema =new mongoose.Schema({
    email: String,
      password: String,
        username: String,
        verified: {
          type: Boolean,
          default: false
      }
})
const UsersModel =mongoose.model("users",UsersSchema)
module.exports = UsersModel