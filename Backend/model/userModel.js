const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
});

const User = mongoose.model("User", userModel);

module.exports = User;
