const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const UserSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(value) {
            return emailRegex.test(value);
        }
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;