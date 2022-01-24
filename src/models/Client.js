const mongoose = require("mongoose");

const client = mongoose.Schema({
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
