const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    email: {
        type: 'string',
        require: true
    },
    message: {
        type: 'string',
        require: true
    },
    number: {
        type: 'number'
    }

})

module.exports = mongoose.model('userModel', userSchema);