const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Posts', PostSchema);