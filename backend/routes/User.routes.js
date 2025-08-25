import express from "express";
import {
  refreshToken,
  setSupabaseSession,
} from "../middleware/supabase.middleware.js";
import { retrieveUserProfile } from "../controllers/User.controller.js";
const router = express.Router();

router.get("/", setSupabaseSession, refreshToken, retrieveUserProfile);

export default router;
