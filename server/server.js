import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Define port
const PORT = process.env.PORT || 6000;

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});




