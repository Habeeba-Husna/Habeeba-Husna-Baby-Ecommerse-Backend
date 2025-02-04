import express from 'express'
import authenticate from '../middlewares/authMiddleware.js'
import isAdmin from '../middlewares/isAdmin.js'
import { allUser, singleUser, userBlock ,orderDetails,userCount,grossProfit } from '../controllers/adminController.js'

const router=express.Router()

router.put('/blockUser/:id',authenticate,isAdmin,userBlock)
router.get('/users',authenticate,isAdmin,allUser)
router.get('/users/:id',authenticate,isAdmin,singleUser)
router.get('/order',authenticate,isAdmin,orderDetails)
router.get('/usersCount',authenticate,isAdmin,userCount)
router.get('/grossProfit',authenticate,isAdmin,grossProfit)
export default router