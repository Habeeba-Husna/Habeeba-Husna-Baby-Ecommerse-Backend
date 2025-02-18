import express from "express";
import { addOrder, showOrders} from "../controllers/orderController.js";
import authenticate from "../middlewares/authMiddleware.js";
import { validateBody } from "../validation/validation.js";
import { orderValidationSchema } from "../validation/validation.js";

const router = express.Router();

router.post('/addOrder', authenticate,validateBody(orderValidationSchema), addOrder);
router.get('/showOrder', authenticate, showOrders);

export default router;
