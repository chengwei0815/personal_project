const mongoose = require('mongoose');
const { Schema } = mongoose;
const serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: [true, 'A service name is required.'],
        minlength: [1, 'Minimum length for the service name is 1 character.']
    },
    content: {
        type: String,
        required: [true, 'A service content is required.'],
        minlength: [1, 'Minimum length is 1 character.']
    },
});
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
