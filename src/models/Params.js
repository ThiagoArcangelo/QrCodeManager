const mongoose = require("mongoose");

const paramSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    select: false
  },
});

module.exports = mongoose.model("Param", paramSchema);
