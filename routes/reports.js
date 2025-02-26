const express = require("express");
const router = express.Router();

// Example report submission route
router.post("/", async (req, res) => {
  res.json({ message: "Report submitted!" });
});

module.exports = router; // ✅ FIX: This should be at the end
