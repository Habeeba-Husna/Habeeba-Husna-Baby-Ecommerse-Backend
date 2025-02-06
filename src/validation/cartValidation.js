// import Joi from "joi";
// import mongoose from "mongoose";

// // Joi validation schema for cart
// const cartValidationSchema = Joi.object({
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
//       "any.invalid": "Invalid User ID format."
//     }),

//   products: Joi.array()
//     .items(
//       Joi.object({
//         product: Joi.string()
//           .custom((value, helpers) => {
//             if (!mongoose.Types.ObjectId.isValid(value)) {
//               return helpers.error("any.invalid");
//             }
//             return value;
//           })
//           .required()
//           .messages({
//             "any.required": "Product ID is required.",
//             "any.invalid": "Invalid Product ID format."
//           }),

//         quantity: Joi.number().integer().min(1).required().messages({
//           "number.base": "Quantity must be a number.",
//           "number.integer": "Quantity must be an integer.",
//           "number.min": "Quantity must be at least 1.",
//           "any.required": "Quantity is required."
//         }),
//       })
//     )
//     .min(1)
//     .required()
//     .messages({
//       "array.min": "Cart must contain at least one product.",
//       "any.required": "Products array is required."
//     })
// });

// // Function to validate cart data
// export const validateCart = (cart) => {
//   return cartValidationSchema.validate(cart, { abortEarly: false });
// };
