const mongoose = require("mongoose");

const client = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    mainlength: 4,
  },
});

module.exports = mongoose.model("Client", client);
