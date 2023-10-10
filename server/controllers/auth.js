import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //Check if username or email exists
    const user = await User.findOne({
      where: { username: req.body.username, email: req.body.email },
    });
    if (user) {
      return res.status(409).json("User already exist");
    }
    //Create new User
    //Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(req.body.password, salt);

    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw,
      name: req.body.name,
    });
    res.status(200).json("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    //Check if username exists
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(404).json("User not found");
    }
    //Check if passwords match
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json("Wrong password or username");
    }
    //Pass cookie token
    const token = jwt.sign({ id: user.id }, "nbf3o2oa9");
    const { ...other } = user;
    const {password, ...others} = other.dataValues

    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
    res
      .clearCookie("accessToken", {
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json("Logged Out");
};
