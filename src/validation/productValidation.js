// import Joi from "joi";

// // Joi validation schema for product
// const productValidationSchema = Joi.object({
//   name: Joi.string().required().messages({
//     "string.empty": "Product name is required."
//   }),
//   price: Joi.number().positive().required().messages({
//     "number.base": "Price must be a number.",
//     "number.positive": "Price must be a positive number.",
//     "any.required": "Price is required."
//   }),
//   quantity: Joi.number().integer().min(0).required().messages({
//     "number.base": "Quantity must be a number.",
//     "number.integer": "Quantity must be an integer.",
//     "number.min": "Quantity cannot be negative.",
//     "any.required": "Quantity is required."
//   }),
//   url: Joi.string().uri().required().messages({
//     "string.uri": "Image URL must be a valid URL.",
//     "any.required": "Image URL is required."
//   }),
//   description: Joi.string().required().messages({
//     "string.empty": "Product description is required."
//   }),
//   category: Joi.string().required().messages({
//     "string.empty": "Category is required."
//   }),
//   isDelete: Joi.boolean().default(false)
// });

// // Function to validate product data
// export const validateProduct = (product) => {
//   return productValidationSchema.validate(product, { abortEarly: false });
// };
