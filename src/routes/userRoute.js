import express from 'express';
import { registerUser,loginUser, refreshToken } from '../controllers/userController.js';
// import { validate, userValidationSchema, loginValidationSchema } from '../validation/userValidation.js'

const router = express.Router();

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/refresh-token', refreshToken);

export default router;
// router.post('/register', validate(userValidationSchema),registerUser);
// router.post('/login',validate(loginValidationSchema), loginUser);





