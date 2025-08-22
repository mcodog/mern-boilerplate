import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE = process.env.SERVICE_ROLE;

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE);

export default supabaseAdmin;
