import express from "express";
import   { loginAdmin, registerAdmin }  from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome admin!", user: req.user });
});

router.post("/register", registerAdmin);

export default router;
