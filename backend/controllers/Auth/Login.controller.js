import {
  cookieConfig,
  refreshCookieConfig,
} from "../../config/cookie.config.js";
import supabaseAdmin from "../../config/supabase.cofig.js";

export const tokenSignIn = async (req, res) => {
  try {
    const { access_token, refresh_token } = req.body;

    const { data, error } = await supabaseAdmin.auth.setSession({
      access_token,
      refresh_token,
    });

    console.log(data);

    res.cookie("access_token", access_token, cookieConfig);
    res.cookie("refresh_token", refresh_token, refreshCookieConfig);

    return res.status(200).json({ message: "good" });
  } catch (e) {
    return res.status(500).json({ message: "failed api" });
  }
};
