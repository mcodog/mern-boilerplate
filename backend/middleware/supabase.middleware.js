// middleware/setSupabaseSession.js
import supabaseAdmin from "../config/supabase.cofig.js";

export async function setSupabaseSession(req, res, next) {
  const access_token = req.cookies.access_token;
  const refresh_token = req.cookies.refresh_token;

  if (!access_token || !refresh_token) {
    return res.status(400).json({ error: "Missing access or refresh token" });
  }

  try {
    const { data, error } = await supabaseAdmin.auth.setSession({
      access_token,
      refresh_token,
    });

    if (error) throw new Error(error.message);

    if (data.user) {
      req.user = data.user;
      req.userId = data.user.id;
    }

    next();
  } catch (e) {
    console.error("Auth session error:", e.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

export async function checkIfAdmin(req, res, next) {
  const id = req.userId;
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Server error" });
  }

  if (data.role != "admin") {
    return res.status(403).json({ message: "Not Admin" });
  }
  next();
}
