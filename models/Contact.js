const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    defualt: Date.now
  },
});

module.exports = mongoose.model("contact", ContactSchema);