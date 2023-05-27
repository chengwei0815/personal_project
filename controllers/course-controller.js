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
        const{title, }
    }


}
