const express = require("express");
const aboutCtrl = require("../controllers/aboutCtrl");
const router = express.Router();

// CONTACT ROUTES
router.route("/").get(aboutCtrl.about);

module.exports = router;
