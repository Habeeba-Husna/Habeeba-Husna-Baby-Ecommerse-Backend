import mongoose from "mongoose";
// import { validateProduct } from "../validation/productValidation.js";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  isDelete: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;





// // Pre-save hook to validate product data
// productSchema.pre("save", function (next) {
//   // Clone the document and remove internal Mongoose properties
//   const docToValidate = this.toObject();
  
//   // Remove _id from the validation object
//   delete docToValidate._id;

//   const { error } = validateProduct(docToValidate); // Validate using Joi

//   if (error) {
//     next(new Error(`Validation failed: ${error.details.map(d => d.message).join(", ")}`));
//   } else {
//     next(); // Proceed with save if validation passes
//   }
// });