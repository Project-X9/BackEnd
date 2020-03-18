const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A category must have a name'],
        minlength:1,
        maxlength:50
    },
    icon: {
        type: String,
        minlength:5,
        maxlength:255
    },
    href:{
        type: String,
        required: [true, 'A category must have a href'],
        minlength:5,
        maxlength:255
    }
});

const Category = mongoose.model('Category',userSchema);

module.exports = Category;