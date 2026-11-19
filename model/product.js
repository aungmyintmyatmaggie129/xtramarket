const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    image: {
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);