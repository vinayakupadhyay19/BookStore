const User = require("../model/userModel.js");
const bcryptjs = require("bcryptjs");
const Signup = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    const findUser = await User.findOne({ Email });
    if (!findUser) {
      const hashedPassword = await bcryptjs.hash(Password, 10);
      const newUser = new User({
        FullName: FullName,
        Email: Email,
        Password: hashedPassword,
      });
      await newUser.save();
      return res
        .status(201)
        .json({ message: "User created successfully!", user: newUser });
    } else {
      return res.status(400).json({ message: "User already exists...." });
    }
  } catch (err) {
    console.error("Vinayak Error : " + err);
    return res.status(500).json({ message: "Internal server err : " + err });
  }
};

const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found...." });
    } else {
      const isMatch = await bcryptjs.compare(Password, user.Password);
      if (!isMatch || !user) {
        return res
          .status(401)
          .json({ message: "Invalid user or password...." });
      } else {
        return res.json({
          message: "Login success!",
          user: {
            FullName: user.FullName,
            Email: user.Email,
            _id: user._id,
          },
        });
      }
    }
  } catch (err) {
    console.error("Vinayak Error : " + err);
    return res.status(500).json({ message: "Internal server err : " + err });
  }
};

module.exports = { Signup, Login };
