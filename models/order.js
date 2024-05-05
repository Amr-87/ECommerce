const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    products: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
        }] ,   
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true });

exports.Order = mongoose.model('Order',Schema);
