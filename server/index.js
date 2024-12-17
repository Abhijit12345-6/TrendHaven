const express = require("express");
const app = express();
const allRoutes = require("./routes/allRoutes");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Database Connection
database.connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // Corrected typo
  })
);

// Routes
app.use("/trendhaven", allRoutes);

// Default Route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Your server is up and running",
  });
});

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: err.message,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`App is running on port:${PORT}`);
});
