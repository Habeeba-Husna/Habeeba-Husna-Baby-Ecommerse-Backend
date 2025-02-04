import express from 'express'
import {addToCart,getCart,removeFromCart,incrementProductQuantity,decrementProductQuantity} from '../controllers/cartController.js'
import authenticate from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/addToCart/:productId',authenticate,addToCart);
router.get('/getCart',authenticate,getCart);
router.delete('/removeFromCart/:productId',authenticate,removeFromCart);

// Increment and Decrement routes
router.put('/increment/:productId',authenticate, incrementProductQuantity); 
router.put('/decrement/:productId',authenticate, decrementProductQuantity); 


export default router;

