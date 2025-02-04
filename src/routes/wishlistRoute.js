import express from "express";
import { addToWishlist,removeSingleWishlist,getAllWishlist } from "../controllers/wishlistController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/addToWishlist/:id", authenticate, addToWishlist);
router.delete('/deleteWishlist/:id',authenticate,removeSingleWishlist)
router.get('/getWishlist',authenticate,getAllWishlist)

export default router;
