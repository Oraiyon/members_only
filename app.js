const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
dotenv.config();

const main = async () => {
  try {
    await mongoose.connect(process.env.URL);
  } catch (error) {
    console.log(error);
  }
};
main();

const app = express();
app.listen(3000);

app.set("views", __dirname);
app.set("view engine", "ejs");
