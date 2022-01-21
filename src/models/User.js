const mongoose = require("mongoose");

const createUser = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = mongoose.model("User", createUser);
