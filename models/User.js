const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true , 'Please enter an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true , 'Please enter a password'],
    },
    Posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts",
        },
    ],
});


const User =  mongoose.model("users" , UserSchema);
module.exports = User;
