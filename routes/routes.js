const express = require("express");
const router = express.Router();

const messages_Controller = require("../controllers/messagesController");

router.get("/", messages_Controller.index);
router.get("/post", messages_Controller.create_post_get);
router.post("/post", messages_Controller.create_post_post);

module.exports = router;
