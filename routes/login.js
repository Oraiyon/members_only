const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("login", {
    title: "Login"
  });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/messages",
    failureRedirect: "/signup"
  })
);

module.exports = router;
