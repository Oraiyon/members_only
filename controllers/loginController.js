const passport = require("passport");

exports.login_get = (req, res, next) => {
  res.render("login", {
    title: "Login"
  });
};

exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/signup"
});
