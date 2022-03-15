var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Add A New Message" });
});

router.post("/new", function (req, res, next) {
  const { user, messageText } = req.body;
  messages.push({ text: messageText, user: user, added: new Date() });
  console.log("Added new message");
  res.redirect("/");
});
module.exports = router;
