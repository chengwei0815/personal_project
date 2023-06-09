const mongoose = require('mongoose');
const { Schema } = mongoose;
const courseSchema = new Schema({
    courseName: {
        type: String,
        required: [true, "A course name is required."],
        minlength:[1, 'Minimum length for the course name is 1 character.']
    },
    about: {
        type: String,
        required: [true, 'A description is required.'],
        minlength:[1, 'Minimum length for the description is 1 character,']
    },
    date: {
        type: String,
    },
    location: {
        type: String,
    },
    moreInfor: {
        type:String,
    },

});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

