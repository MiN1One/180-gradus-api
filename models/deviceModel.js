const { Schema, model } = require('mongoose');
const slugify = require('slugify');

const DeviceSchema = new Schema(
    {
        device: {
            type: String,
            required: [true, 'Device field is required'],
            unique: true
        },
        numberOfPurchases: {
            type: Number,
            default: 0
        },
        deviceVendor: {
            type: String,
            required: [true, 'Device manufacturer is required'],
        },
        type: {
            type: String,
            default: 'skins'
        },
        category: {
            type: String,
            trim: true,
            required: [true, 'Category is required']
        },
        default: {
            type: String,
            required: [true, 'Default device image is required']
        },
        skins: {
            type: [String],
            required: [true, 'Skins are required']
        },
        price: {
            type: Number,
            required: [true, 'Price is must-have']
        },
        created: {
            type: Date,
            default: Date.now(),
            select: false
        },
        exclusive: {
            type: Boolean,
            default: false
        },
        tags: {
            type: String,
            required: [true, 'Tags are required for better SEO']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

DeviceSchema.index({ device: 'text', deviceVendor: 'text', tags: 'text' });

// DeviceSchema.virtual('slug').get(function() {
//     console.log(this.device);
//     // return slugify(this.device);
// });

const deviceModel = model('device', DeviceSchema);

module.exports = deviceModel;