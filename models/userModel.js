const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    login: {
        type: String,
        required: [true, 'Enter your login'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Enter your email'],
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    name: {
        type: String,
        required: [true, 'Enter your name']
    },
    last_name: {
        type: String,
        required: [true, 'Enter your last name']
    },
    address: {
        type: String,
        required: [true, 'Enter your address']
    },
    phone_number: {
        type: String,
        required: [true, 'Enter your phone number']
    },
    password: {
        type: String,
        required: [true, 'Enter your password'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    passwordChangedAt: Date,
    passwordResetToken: Date,
    passwordResetTokenExires: Date
});

// DOCUMENT
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 13);

    next();
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password') || this.isNew) 
        return next();

    this.passwordChangedAt = Date.now() - 1500;
});

// METHODS
userSchema.methods.correctPassword = async function(cPass) {
    return await bcrypt.compare(cPass, this.password);
};

userSchema.methods.passwordWasChanged = function(timeStamp) {
    if (this.passwordChangedAt) {
        const passwordTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

        return timeStamp < passwordTimeStamp;
    }

    return false;
};

const UserModel = model('User', userSchema);

module.exports = UserModel;