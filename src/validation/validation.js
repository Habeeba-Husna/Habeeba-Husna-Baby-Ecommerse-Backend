import Joi from "joi";
import mongoose from "mongoose";

// User Registration Schema
export const userValidationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp("[A-Z]")) // At least one uppercase letter
    .pattern(new RegExp("[0-9]")) // At least one number
    .required(),
  name: Joi.string().min(3).max(50).required(),
  isAdmin: Joi.boolean().default(false),
  isBlock: Joi.boolean().default(false),
});

// User Login Schema
export const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Product Validation Schema
export const productValidationSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().min(3).max(50).required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().min(0).required(),
  url: Joi.string().uri().optional(),
  description: Joi.string().min(10).max(500).required(),
  category: Joi.string().min(3).max(50).required(),
  isDelete: Joi.boolean().default(false),
});


// Cart Validation Schema
export const cartValidationSchema = Joi.object({
  productId: Joi.string().custom((value, helper) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helper.message("Invalid product ID");
    }
    return value;
  }).required(),
});

// Wishlist Validation Schema
export const wishlistValidationSchema = Joi.object({
  id: Joi.string().custom((value, helper) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helper.message("Invalid product ID");
    }
    return value;
  }).required(),
});


// Order Validation Schema
export const orderValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(5).max(500).required(),
  paymentMethod: Joi.string().valid("razorpay", "card", "paypal").required()
});


export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ errors: error.details.map((err) => err.message) });
  }
  next();
};

export const validateParams = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params, { abortEarly: false });

  if (error) {
    return res.status(400).json({ errors: error.details.map((err) => err.message) });
  }
  next();
};



// export const passwordValidator = [
//     {
//       validator: function (password) {
//         return password.length >= 8; 
//       },
//       message: "Password must be at least 8 characters long.",
//     },
//     {
//       validator: function (password) {
//         return /[A-Z]/.test(password); 
//       },
//       message: "Password must contain at least one uppercase letter.",
//     },
//     {
//       validator: function (password) {
//         return /[0-9]/.test(password); 
//       },
//       message: "Password must contain at least one number.",
//     },
//   ];