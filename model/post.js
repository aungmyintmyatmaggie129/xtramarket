//Schema
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    productFullName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    }
}, {timestamps: true})

const Post = mongoose.model('Cart', PostSchema);
module.exports = Post;