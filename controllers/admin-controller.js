const Course = require('../models/course-model');

module.exports = {
    admin: (req, res) => {
        if (req.isAuthenticated()) {
            Course.find({}, (error, allCourses) => {
                if (error) {
                    return error;
                } else {
                    res.render('pages/admin', {
                        courseArray: allCourses,
                    });
                }
            })
        } else {
            res.redirect('/login');
        }
    },

    create: (req, res) => {
        res.render('pages/create-course');
    },

    update: (req, res) => {
        const { _id } = req.params;
        Course.findOne({ _id: _id }, (error, foundCourse) => {
            if (error) {
                return error;
            } else {
                res.render('pages/update', {
                    newCourse: foundCourse,
                });
            }
        })
    },
    



}
