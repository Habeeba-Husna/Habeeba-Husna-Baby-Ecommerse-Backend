import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/dbConfig.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import wishlistRoute from './routes/wishlistRoute.js'
import cookieParser from 'cookie-parser';
import orderRoute from './routes/orderRoute.js';
import errorHandler from './middlewares/errorHandler.js'
import adminRoute from './routes/adminRoute.js'

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());       //  parse cookies into req.cookies

app.use('/api/auth', userRoute);
app.use('/api', productRoute);
app.use('/cart', cartRoute);
app.use('/wishlist', wishlistRoute);
app.use('/orders', orderRoute);
app.use('/admin',adminRoute);

// app.use(errorHandler)
// app.get('/', (req, res) => {
//     res.send('E-commerce Backend is up and running!');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
