const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category is mandatory'],
        unique: true
    },
    image: {
        type: String,
        required: [true, 'Image is mandatory']
    },
    type: {
        type: String,
        default: 'skins'
    }
});

const CategoryModel = model('Category', CategorySchema);

module.exports = CategoryModel;