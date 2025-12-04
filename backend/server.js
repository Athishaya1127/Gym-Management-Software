// backend/server.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Basic healthcheck
app.get("/", (req, res) => {
  res.json({ message: "GymX API is running..." });
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error middleware:", err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
