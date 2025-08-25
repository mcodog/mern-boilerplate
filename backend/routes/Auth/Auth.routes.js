import express from "express";
import { registerUser } from "../../controllers/Auth/Register.controller.js";
import {
  logout,
  signIn,
  tokenSignIn,
} from "../../controllers/Auth/Login.controller.js";
import {
  refreshToken,
  unsetSession,
} from "../../middleware/supabase.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/signin-token", unsetSession, tokenSignIn);
router.post("/login", unsetSession, signIn);
router.get("/logout", logout);

export default router;
