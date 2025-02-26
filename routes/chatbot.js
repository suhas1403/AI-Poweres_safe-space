const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

// API Endpoint for Mistral 7B (Together AI)
const TOGETHER_AI_URL = "https://api.together.xyz/v1/chat/completions";

// Chatbot API Endpoint
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Send request to Mistral 7B API
    const response = await axios.post(
      TOGETHER_AI_URL,
      {
        model: "mistralai/Mistral-7B-Instruct-v0.1",
        messages: [{ role: "user", content: message }],
        max_tokens: 200,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Send AI response to frontend
    res.json({ reply: response.data.choices[0].message.content.trim() });

  } catch (error) {
    console.error("Chatbot Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
