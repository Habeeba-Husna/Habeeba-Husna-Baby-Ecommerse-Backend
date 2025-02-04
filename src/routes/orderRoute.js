import express from "express";
import { addOrder, showOrders} from "../controllers/orderController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/addOrder', authenticate, addOrder);
router.get('/showOrder', authenticate, showOrders);

export default router;
