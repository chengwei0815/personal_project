const express = require('express');
const coursesCtrl = require('../controllers/coursesCtrl');
const servicesCtrl = require('../controllers/servicesCtrl');
const router = express.Router();

router.route('/').get(coursesCtrl.all_courses)
    .post(servicesCtrl.service_create_post)

router.route('/:_id').get(servicesCtrl.service_detail)
    .put(servicesCtrl.service_update_put)
    .delete(servicesCtrl.service_delete)

module.exports = router;
