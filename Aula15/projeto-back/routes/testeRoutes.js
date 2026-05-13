const express = require("express");
const router = express.Router();
const { testarAPI } = require("../controllers/testesContoller");
router.get(
  "/",
  testarAPI
);

module.exports = router;