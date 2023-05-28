const Course = req('../models/course-model');

module.exports = {
    courses: (req, res) => {
        const { _id } = req.params;
        Course.findOne({ _id: _id }, (error, foundCourse) => {
            if (error) {
                return error;
            } else {
                res.render('pages/courseDetail', {
                    newCourse: foundCourse
                });
            }
        })
    },

    course_create_post: (req, res) => {
        const { courseName, about, date, location, moreInfor } = request.body;
        const newCourse = new Course({
            courseName: courseName,
            about: about,
            date: date,
            location: location,
            moreInfor: moreInfor
        });

        newCourse.save();
        res.redirect('/admin/admin-books');
    },


}
