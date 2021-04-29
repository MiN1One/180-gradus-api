const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
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
        },
        exclusive: {
            type: Boolean,
            default: false
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

categorySchema.virtual('devices', {
    ref: 'device',
    foreignField: 'category',
    localField: '_id',
    justOne: false
});

const CategoryModel = model('Category', categorySchema);

module.exports = CategoryModel;