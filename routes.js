const express = require("express");
const router = express.Router();

const messages_controller = require("./controllers/messagesController");
const signup_controller = require("./controllers/signupController");
const login_controller = require("./controllers/loginController");
const member_controller = require("./controllers/memberController");

//  TYPING ROUTES ARE STILL ACCESSIBLE

router.get("/", messages_controller.index);
router.post("/", messages_controller.delete_post);
router.get("/post", messages_controller.create_post_get);
router.post("/post", messages_controller.create_post_post);

router.get("/signup", signup_controller.signup_get);
router.post("/signup", signup_controller.signup_post);

router.get("/login", login_controller.login_get);
router.post("/login", login_controller.login_post);
router.get("/logout", login_controller.logout);

router.get("/member", member_controller.member_get);
router.post("/member", member_controller.member_post);
router.get("/admin", member_controller.admin_get);
router.post("/admin", member_controller.admin_post);

module.exports = router;
