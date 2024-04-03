const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

exports.member_get = (req, res, next) => {
  res.render("member");
};

exports.member_post = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).exec();
  if (req.body.passcode !== process.env.SECRET) {
    const messages = ["Turn back!", "You don't belong here...", "Wrong!", "Leave now..."];
    const selectedMessage = messages[Math.floor(Math.random() * messages.length)];
    res.render("member", {
      message: selectedMessage
    });
    return;
  } else {
    user.member = true;
    await user.save();
    res.redirect("/");
  }
});
