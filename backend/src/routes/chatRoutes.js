const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controller/chatController");

// New AI chat route
router.post("/chats", sendMessage);

// Optional test route
router.get("/test", (req, res) => {
  res.json({ message: "Chat route is working!" });
});

module.exports = router;
