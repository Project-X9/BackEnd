const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A category must have a name'],
        minlength:1,
        maxlength:50
    },
    icon: {
        type: String,
    },
    href:{
        type: String,
        required: [false, 'A category must have a href'],
        minlength:5,
        maxlength:255
    },
    playlists:[String]
});

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;