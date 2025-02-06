// import Joi from "joi";
// import mongoose from "mongoose";

// // Joi validation schema for order
// const orderValidationSchema = Joi.object({
//   user: Joi.string()
//     .custom((value, helpers) => {
//       if (!mongoose.Types.ObjectId.isValid(value)) {
//         return helpers.error("any.invalid");
//       }
//       return value;
//     })
//     .required()
//     .messages({
//       "any.required": "User ID is required.",
//       "any.invalid": "Invalid User ID format.",
//     }),

//   items: Joi.array()
//     .items(
//       Joi.object({
//         productId: Joi.string()
//           .custom((value, helpers) => {
//             if (!mongoose.Types.ObjectId.isValid(value)) {
//               return helpers.error("any.invalid");
//             }
//             return value;
//           })
//           .required()
//           .messages({
//             "any.required": "Product ID is required.",
//             "any.invalid": "Invalid Product ID format.",
//           }),

//         quantity: Joi.number().integer().min(1).required().messages({
//           "number.base": "Quantity must be a number.",
//           "number.integer": "Quantity must be an integer.",
//           "number.min": "Quantity must be at least 1.",
//           "any.required": "Quantity is required.",
//         }),
//       })
//     )
//     .min(1)
//     .required()
//     .messages({
//       "array.min": "Order must contain at least one product.",
//       "any.required": "Items array is required.",
//     }),

//   date: Joi.date().default(Date.now).messages({
//     "date.base": "Invalid date format.",
//   }),

//   name: Joi.string().trim().min(2).max(50).required().messages({
//     "string.base": "Name must be a string.",
//     "string.min": "Name must be at least 2 characters.",
//     "string.max": "Name cannot exceed 50 characters.",
//     "any.required": "Name is required.",
//   }),

//   address: Joi.string().trim().min(5).max(100).required().messages({
//     "string.base": "Address must be a string.",
//     "string.min": "Address must be at least 5 characters.",
//     "string.max": "Address cannot exceed 100 characters.",
//     "any.required": "Address is required.",
//   }),

//   paymentMethod: Joi.string()
//     .valid("razorpay", "card", "paypal", "cash")
//     .required()
//     .messages({
//       "any.only": "Invalid payment method. Choose between razorpay, card, paypal, or cash.",
//       "any.required": "Payment method is required.",
//     }),

//   total: Joi.number().positive().required().messages({
//     "number.base": "Total amount must be a number.",
//     "number.positive": "Total amount must be greater than zero.",
//     "any.required": "Total amount is required.",
//   }),
// });

// // Function to validate order data
// export const validateOrder = (order) => {
//   return orderValidationSchema.validate(order, { abortEarly: false });
// };

