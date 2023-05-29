const express = require('express');
const coursesCtrl = require('../controllers/coursesCtrl');
const router = express.Router();

router.route('/').get(coursesCtrl.all_courses)
    .post(coursesCtrl.course_create_post)

router.route('/:_id').get(coursesCtrl.course_detail)
    .put(coursesCtrl.course_update_put)
    .delete(coursesCtrl.course_delete)

module.exports = router;

