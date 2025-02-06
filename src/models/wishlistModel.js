import mongoose from "mongoose";
// import { validateWishlist } from "../validation/wishlistValidation.js";

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// // Pre-save hook to validate wishlist data
// wishlistSchema.pre("save", function (next) {
//   const { error } = validateWishlist(this); // Validate using Joi
//   if (error) {
//     next(new Error(`Validation failed: ${error.details.map(d => d.message).join(", ")}`));
//   } else {
//     next(); // Proceed with save if validation passes
//   }
// });

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
