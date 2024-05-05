const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        maxlength: 22,
        required: [true, 'Full name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function(value) {
                // Simple email validation using regex
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

exports.Seller = mongoose.model('Seller', Schema);
