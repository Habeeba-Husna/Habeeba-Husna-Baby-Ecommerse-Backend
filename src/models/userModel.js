import mongoose from 'mongoose';
import { passwordValidator } from '../validation/userValidation.js';
// import { validateUser } from '../validation/userValidation.js';


// const Schema=mongoose.Schema
// const userSchema = new Schema({
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidator
    },
    name: {
        type: String,
        required: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
    isBlock: { type: Boolean, required: true, default: false },
},
    {
        timestamps: true,     //automatically createdAt and updatedAt fields 
    }
);


// // Pre-save hook to validate user data before saving to DB
// userSchema.pre('save', async function (next) {
//     const { error } = validateUser(this);  // Validate using Joi before saving
//     if (error) {
//         next(new Error(`Validation failed: ${error.details[0].message}`));  // Pass Joi error message to next()
//     } else {
//         next();  // Proceed with save if validation passes
//     }
// });

const User = mongoose.model('User', userSchema);

export default User;
