const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.log("Error: " + err));

// Routes
const authRoutes = require("./routes/auth");
const chatbotRoutes = require("./routes/chatbot");
const reportRoutes = require("./routes/reports");

app.use("/api/auth", authRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/reports", reportRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
