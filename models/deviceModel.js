const { Schema, model } = require('mongoose');

const deviceSchema = new Schema(
    {
        device: {
            type: String,
            required: [true, 'Device field is required'],
            unique: true
        },
        active: {
            type: Boolean,
            default: true
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
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Device must belong to a category']
        },
        default: {
            type: String,
            required: [true, 'Default device image is required']
        },
        skins: [
            {
                name: {
                    type: String,
                    required: [true, 'Device must have skins']
                },
                image: {
                    type: String,
                    required: [true, 'Skin must have an image']
                },
                price: {
                    type: String,
                    required: [true, 'Skin must have an price']
                }
            }
        ],
        created: {
            type: Date,
            default: Date.now(),
            select: false
        },
        tags: {
            type: String,
            required: [true, 'Tags are required for better SEO'],
            select: false
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

deviceSchema.index({ device: 'text', deviceVendor: 'text', tags: 'text' });

// deviceSchema.virtual('slug').get(function() {
//     console.log(this.device);
//     // return slugify(this.device);
// });

// QUERY
deviceSchema.pre(/^find/, function() {
    this.find({ skins: { $ne: [] } });
});

const deviceModel = model('device', deviceSchema);

module.exports = deviceModel;