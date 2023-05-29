const express = require('express');
const siteRouter = require('./siteRouter');
const coursesRouter = require('./coursesRouter');
const servicesRouter = require('./servicesRouter');
const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/courses', coursesRouter);
router.use('/services', servicesRouter);
router.set('/admin', adminRouter);

module.exports = router;

