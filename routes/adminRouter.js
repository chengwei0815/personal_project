const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

router.route('/').get(adminCtrl.admin)

router.route('/admin-courses').get(adminCtrl.admin_courses)

router.route('/create-course').get(adminCtrl.create_course)

router.route('/admin-services').get(adminCtrl.admin_services)

router.route('/create-service').get(adminCtrl.create_service)

router.route('/:_id/edit-course').get(adminCtrl.course_update_get)

router.route('/:_id/edit-service').get(adminCtrl.service_update_get)

module.exports = router;

