const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", (req, res, next) => {
  res.render("member");
});

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).exec();
    if (req.body.passcode !== process.env.SECRET) {
      res.render("member");
      return;
    } else {
      user.member = true;
      await user.save();
      res.redirect("/messages");
    }
  })
);

module.exports = router;
