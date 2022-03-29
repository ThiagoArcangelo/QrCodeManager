const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    select: false
  },
  createdAt: {
    type: Date,
    dafault: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;

  next();
})

module.exports = mongoose.model("User", UserSchema);
