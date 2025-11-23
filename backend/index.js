import express from "express";
import routes from "./routes.js";
// TODO: complete me (loading the necessary packages)
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

console.log("CORS index allowed origin:", FRONTEND_URL);

// TODO: complete me (CORS)
const corsOptions = {
  origin: FRONTEND_URL,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use('', routes);

export default app;