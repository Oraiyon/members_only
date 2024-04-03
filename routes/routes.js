const express = require("express");
const router = express.Router();

const messages_controller = require("../controllers/messagesController");
const signup_controller = require("../controllers/signupController");
const login_controller = require("../controllers/loginController");

router.get("/", messages_controller.index);
router.get("/post", messages_controller.create_post_get);
router.post("/post", messages_controller.create_post_post);

router.get("/signup", signup_controller.signup_get);
router.post("/signup", signup_controller.signup_post);

router.get("/login", login_controller.login_get);
router.post("/login", login_controller.login_post);

module.exports = router;
