import express from 'express'
import {getAllProducts,singleProduct,addProduct,deleteProduct,updateProduct} from '../controllers/productController.js'
import isAdmin from '../middlewares/isAdmin.js';
import authenticate from '../middlewares/authMiddleware.js';
import { upload } from '../config/cloudinaryConfig.js';

const router=express.Router()

// router.post('/addProduct',addProduct)
router.get('/products', getAllProducts);
router.get('/products/:id', singleProduct);

router.post('/admin/addProduct',authenticate,isAdmin,upload.single('url'),addProduct);
router.delete('/admin/deleteProduct/:id',authenticate,isAdmin,deleteProduct);
router.put('/admin/updateProduct',authenticate,isAdmin,updateProduct);

export default router;