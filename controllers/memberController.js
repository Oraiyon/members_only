const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

const generateMessage = () => {
  const messages = ["Turn back!", "You don't belong here...", "Wrong!", "Leave now..."];
  const selectedMessage = messages[Math.floor(Math.random() * messages.length)];
  return selectedMessage;
};

exports.member_get = (req, res, next) => {
  res.render("member");
};

exports.member_post = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).exec();
  if (req.body.passcode !== process.env.SECRET) {
    res.render("member", {
      message: generateMessage()
    });
    return;
  } else {
    user.member = true;
    await user.save();
    res.redirect("/");
  }
});

exports.admin_get = (req, res, next) => {
  res.render("admin");
};

exports.admin_post = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).exec();
  if (req.body.admin_code !== process.env.ADMIN) {
    res.render("admin", {
      message: generateMessage()
    });
    return;
  } else {
    user.admin = true;
    await user.save();
    res.redirect("/");
  }
});
