import mongoose from "mongoose";
// import {validateCart} from "../validation/cartValidation.js";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ]
});

// // Pre-save hook to validate cart data
// cartSchema.pre("save", function (next) {
//   // Convert to plain object and remove Mongoose-specific properties
//   const cartData = this.toObject();
//   const { user, products } = cartData; // Extract user and products only

//   // Clean up and ensure fields are strings
//   const cleanedData = {
//     user: user.toString(), // Ensure user is a string
//     products: products.map((product) => ({
//       product: product.product.toString(), // Ensure product is a string
//       quantity: product.quantity
//     }))
//   };

//   const { error } = validateCart(cleanedData); // Validate using Joi
//   if (error) {
//     next(new Error(`Validation failed: ${error.details.map(d => d.message).join(", ")}`));
//   } else {
//     next(); // Proceed with save if validation passes
//   }
// });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
