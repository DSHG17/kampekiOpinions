import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Surname cannot exceed 25 characters"]
    },
    surname: {
        type: String,
        required: [true, "Surname is required"],
        maxLength: [25, "Surname cannot exceed 25 characters"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    profilePicture: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,   
    timestamps: true    
});

export default model("User", userSchema);


