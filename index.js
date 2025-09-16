import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {connectDB} from './utils/connectDB.js';
import studentRouter from './routes/studentRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://student-management-app-frontend.vercel.app/"}));
app.use(express.json());

app.use("/students",studentRouter)

// Connecting to Database
connectDB();

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)    
})