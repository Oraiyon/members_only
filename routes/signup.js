// const express = require("express");
// const router = express.Router();
// const asyncHandler = require("express-async-handler");
// const { body, validationResult } = require("express-validator");
// const User = require("../models/user");
// const bcrypt = require("bcryptjs");

// router.get("/", (req, res, next) => {
//   res.render("signup", {
//     title: "Sign Up"
//   });
// });

// router.post("/", [
//   body("first_name", "First name must be specified").trim().isLength({ min: 1 }).escape(),
//   body("last_name", "Last name must be specified").trim().isLength({ min: 1 }).escape(),
//   body("username", "Username must be specified").trim().isLength({ min: 1 }).escape(),
//   body("password", "Password must be atleast 6 characters").trim().isLength({ min: 6 }).escape(),
//   body("confirmPassword", "Confirm password must match password")
//     .trim()
//     .custom((value, { req }) => {
//       return value === req.body.password;
//     }),
//   asyncHandler(async (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
//       if (err) {
//         return next(err);
//       } else {
//         const errors = validationResult(req);
//         const user = new User({
//           first_name: req.body.first_name,
//           last_name: req.body.last_name,
//           username: req.body.username,
//           password: hashedPassword,
//           member: false
//         });
//         if (!errors.isEmpty()) {
//           res.render("signup", {
//             title: "Sign Up",
//             user: user,
//             errors: errors.array()
//           });
//           return;
//         } else {
//           await user.save();
//           res.redirect("/login");
//         }
//       }
//     });
//   })
// ]);

// module.exports = router;
