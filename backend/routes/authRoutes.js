// backend/routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const { protect, allowRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Example protected route (admin only)
router.get("/admin-only", protect, allowRoles("admin"), (req, res) => {
  res.json({
    message: "Welcome, admin!",
    user: req.user,
  });
});

module.exports = router;
