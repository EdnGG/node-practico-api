const express = require("express");

const response = require("../../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Everything works fine!");
  response.success(req, res, "All its good", 200);
});

module.exports = router;
