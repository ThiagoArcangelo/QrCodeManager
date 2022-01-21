const mongoose = require("mongoose");

const paramSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    mainlength: 4,
  },
});

module.exports = mongoose.model("Param", paramSchema);
