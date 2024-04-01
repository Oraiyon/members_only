const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");

dotenv.config();

const main = async () => {
  try {
    await mongoose.connect(process.env.URL);
  } catch (error) {
    console.log(error);
  }
};
main();
mongoose.set("strictQuery", false);

const app = express();
app.listen(3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// To use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
