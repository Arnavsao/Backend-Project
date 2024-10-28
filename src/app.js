import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true })); // Added fallback for CORS_ORIGIN

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import 
import userRouter from './routes/user.routes.js';

// Routes declaration
app.use("/api/v1/users", userRouter);

// Start the server
const PORT = process.env.PORT || 8000; // Define the port to listen on
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`); // Start the server
});

export { app };