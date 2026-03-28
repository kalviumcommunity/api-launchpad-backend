const express = require("express");
const router = express.Router();

// Existing Route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

// TODO: Add a new route
// Route: GET /api/users/:id
// Return the user based on ID

module.exports = router;
