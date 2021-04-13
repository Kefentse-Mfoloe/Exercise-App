const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;