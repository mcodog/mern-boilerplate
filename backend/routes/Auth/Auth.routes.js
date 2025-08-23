import express from "express";
import { registerUser } from "../../controllers/Auth/Register.controller.js";
const router = express.Router();

router.post("/register", registerUser);

export default router;
