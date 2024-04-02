const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Post = require("../models/post");
const { body, validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const [user, posts] = await Promise.all([
      User.findById(req.user.id).exec(),
      // populate("field")
      Post.find().populate("user").exec()
    ]);
    res.render("membersOnly", {
      user: user,
      posts: posts
    });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).exec();
    if (req.body.passcode !== process.env.SECRET) {
      res.render("membersOnly", {
        user: user,
        message: "Try Again!"
      });
    } else {
      user.member = true;
      await user.save();
      res.render("membersOnly", {
        user: user
      });
    }
  })
);

router.get("/post", (req, res, next) => {
  res.render("post");
});

router.post("/post", [
  body("message", "Message must be specified").trim().isLength({ min: 1 }).escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const post = new Post({
      user: req.user.id,
      message: req.body.message
    });
    if (!errors.isEmpty()) {
      res.render("post", {
        message: post.message,
        errors: errors.array()
      });
      return;
    } else {
      await post.save();
      res.redirect("/member");
    }
  })
]);

module.exports = router;
