import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import 'colors'
import { dbConnect } from './database/dbConnect.js'
import userRoute from './routes/userRoutes.js';
import playerRoute from './routes/playerRoutes.js';
import adminRoute from './routes/adminRoutes.js'

dotenv.config();

dbConnect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH']
}));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/player',playerRoute);
app.use('/api/v1/admin',adminRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.bgBlue.bold);
});