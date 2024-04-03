const express = require("express");
const router = express.Router();

const messages_controller = require("../controllers/messagesController");
const signup_controller = require("../controllers/signupController");

router.get("/", messages_controller.index);
router.get("/post", messages_controller.create_post_get);
router.post("/post", messages_controller.create_post_post);

router.get("/signup", signup_controller.signup_get);
router.post("/signup", signup_controller.signup_post);

module.exports = router;
