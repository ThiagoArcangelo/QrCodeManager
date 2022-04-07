const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
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
  key: {
    type: String,
    required: true,
    minlength: 4,
    // select: false
  },
});

module.exports = mongoose.model("Projects", ProjectSchema);
