const User = require("../model/userModel.js");

const Signup = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    const findUser = await User.findOne({ Email });
    if (!findUser) {
      const newUser = new User({
        FullName,
        Email,
        Password,
      });
      await newUser.save();
      return res.status(201).json({ message: "User created successfully!" });
    } else {
      return res.status(400).json({ message: "User already exists...." });
    }
  } catch (err) {
    console.error("Vinayak Error : " + err);
    return res.status(500).json({ message: "Internal server err : " + err });
  }
};

module.exports = Signup;
