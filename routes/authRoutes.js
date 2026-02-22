import express from "express";
const router = express.Router();

import { register, login } from "../controllers/authController.js";
import { validateRegistration, validateLogin } from "../auth/authMiddleware.js";

router.post("/register", validateRegistration, register);
router.post("/login", validateLogin, login);


export default router;