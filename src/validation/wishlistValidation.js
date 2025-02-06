// import Joi from "joi";
// import mongoose from "mongoose";

// // Joi validation schema for wishlist
// const wishlistValidationSchema = Joi.object({
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

//   wishlist: Joi.array()
//     .items(
//       Joi.string()
//         .custom((value, helpers) => {
//           if (!mongoose.Types.ObjectId.isValid(value)) {
//             return helpers.error("any.invalid");
//           }
//           return value;
//         })
//         .required()
//         .messages({
//           "any.required": "Product ID is required.",
//           "any.invalid": "Invalid Product ID format."
//         })
//     )
//     .required()
//     .messages({
//       "array.base": "Wishlist must be an array of product IDs.",
//       "any.required": "Wishlist array is required."
//     }),
// });

// // Function to validate wishlist data
// export const validateWishlist = (wishlist) => {
//   return wishlistValidationSchema.validate(wishlist, { abortEarly: false });
// };
