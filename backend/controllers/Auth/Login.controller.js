import {
  cookieConfig,
  refreshCookieConfig,
} from "../../config/cookie.config.js";
import supabaseAdmin, { supabaseAnon } from "../../config/supabase.cofig.js";
import { getProfile, setSession } from "../../services/Auth/User.service.js";

export const tokenSignIn = async (req, res) => {
  try {
    const { access_token, refresh_token } = req.body;

    const { data, error } = await supabaseAdmin.auth.setSession({
      access_token,
      refresh_token,
    });

    const { session } = data;

    res.cookie("access_token", session.access_token, cookieConfig);
    res.cookie("refresh_token", session.refresh_token, refreshCookieConfig);

    return res.status(200).json({ message: "good" });
  } catch (e) {
    return res.status(500).json({ message: "failed api" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabaseAnon.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    const { session, user } = data;
    const profile = await getProfile(user.id);

    if (profile.status === "inactive") throw new Error("account_inactive");
    res.cookie("access_token", session.access_token, cookieConfig);
    res.cookie("refresh_token", session.refresh_token, refreshCookieConfig);

    return res.status(200).json({ message: "success", profile });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "failed" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token", cookieConfig);
    res.clearCookie("refresh_token", refreshCookieConfig);

    return res.status(200).json({ message: "logout success" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ mesage: "something went wrong" });
  }
};
