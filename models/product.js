const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'this is default product description'
    },
    photo: {
        type: String,
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        ref: 'Seller',
        required: true
    },
},{timestamps: true});

exports.Product = mongoose.model('Product',Schema);
