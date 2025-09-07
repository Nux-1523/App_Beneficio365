import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());

//app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/Beneficio365';

mongoose
    .connect(MONGO_URL)
    .then (() => {
        console.log("✅ Database Connected Successfully.")
        app.listen(PORT, () => {
            console.log(`✅ Server is running on port: ${PORT}`);
        });
    })
    .catch (
        (error) => {
            console.log("❌ Database connection error", error);
        }
    );
    app.use("/api", route);
    app.use("/api/users", route);
