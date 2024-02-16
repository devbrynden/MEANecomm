/**
 * user.model.js
 * @author Brynden Bielefeld (2024)
 */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: false
    },
    lastname: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: [{
        type: Number,
        default: 0,
        required: true
    }]
});

module.exports = mongoose.model("User", userSchema);