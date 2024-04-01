const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

router.get("/", (req, res, next) => {
  res.render("login", {
    title: "Login"
  });
});

router.post("/", [
  body("email", "Email must be specified").trim().isLength({ min: 1 }).escape(),
  body("password", "Password must be atleast 6 characters").trim().isLength({ min: 6 }).escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
  })
]);

module.exports = router;
