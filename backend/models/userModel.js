import mongoose from "mongoose"



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type:String,
        enum:['coach','player','other'],
        required:true,
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
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "non-binary", "trans", "other"],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        public_id: String,
        default: null
    },
    
}, { timestamps: true });

export const userModel = mongoose.model('users', userSchema);