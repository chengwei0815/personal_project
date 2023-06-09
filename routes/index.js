const express = require('express');
const siteRouter = require('./siteRouter');
const coursesRouter = require('./coursesRouter');
const servicesRouter = require('./servicesRouter');
const adminRouter = require('./adminRouter');

const contactRouter = require('./contactRouter');
const aboutRouter = require("./aboutRouter");

const router = express.Router();

router.use('/', siteRouter);
router.use('/courses', coursesRouter);
router.use('/services', servicesRouter);
router.use('/admin', adminRouter);
router.use('/contact', contactRouter);
router.use("/about", aboutRouter);

module.exports = router;
