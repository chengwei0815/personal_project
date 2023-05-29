const siteData = require('../data/siteData');
const Course = req('../models/courseModel');

module.exports = {
    all_courses: (request, response) => {
        Course.find({}, (error, allCourses) => {
            if (error) {
                return error;
            } else {
                response.render('pages/courses', {
                    copyrightYear:siteData.year,
                    courseArray: allCourses
                });
            }
        })
    },
    course_detail: (request, response) => {
        const { _id } = request.params;
        Course.findOnce({ _id: _id }, (error, foundCourse) => {
            if (error) {
                return error;
            } else {
                response.render("pages/courseDetail", {
                  copyrightYear: siteData.year,
                  courseItem: foundCourse,
                });
            }
        })
    },
    course_create_post: (request, response) => {
        const { courseName, about, date, location, moreInfor } = request.body;
        const newCourse = new Course({
            courseName: courseName,
            about: about,
            date: date,
            location: location,
            moreInfor: moreInfor,
        });
        newCourse.save();
        response.redirect('/admin/admin-courses');
    },
    course_update_put: (request, response) => {
        const { _id } = request.params;
        const { courseName, about, date, location, moreInfor } = request.body;
        Course.findByIdAndUpdate(_id, {
            $set: {
                courseName: courseName,
                about: about,
                date: date,
                location: location,
                moreInfor: moreInfor,
            }
        }, { new: true }, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/admin-courses');
            }
        })
    },
    course_delete: (request, response) => {
        const { _id } = request.params;
        Course.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                response.redirect("/admin/admin-courses");
            }
        });
    }
}
