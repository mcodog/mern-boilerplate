import express from "express";
import { registerUser } from "../../controllers/Auth/Register.controller.js";
import { tokenSignIn } from "../../controllers/Auth/Login.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/signin-token", tokenSignIn);

export default router;
