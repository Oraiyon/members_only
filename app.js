const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
// const indexRouter = require("./routes/index");
const messagesRouter = require("./routes/messages");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const memberRouter = require("./routes/member");
const initializePassport = require("./passport-config");

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
app.use(
  session({
    // Put in Railway
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.URL,
      collectionName: "members_only_sessions"
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);
// To use stylesheets
app.use(express.static(path.join(__dirname + "/public")));
// Passport
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

// app.use("/", indexRouter);
app.use("/", messagesRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/member", memberRouter);
