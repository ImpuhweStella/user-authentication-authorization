//models: This folder contains the Mongoose model files. User.js defines the schema for the user model.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
