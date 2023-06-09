const express = require('express');
const contactCtrl = require('../controllers/contactCtrl');
const router = express.Router();

// CONTACT ROUTES
router.route('/').get(contactCtrl.contact);

module.exports = router;

