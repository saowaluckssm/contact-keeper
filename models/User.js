const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    requried: true,
    unique: true
  },
  password: {
    type: String,
    requried: true,
    
  },
  date: {
    type: Date,
    defualt: Date.now
  },
});

module.exports = mongoose.model("user", UserSchema);