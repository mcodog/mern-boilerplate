import {
  cookieConfig,
  refreshCookieConfig,
} from "../../config/cookie.config.js";
import supabaseAdmin, { supabaseAnon } from "../../config/supabase.cofig.js";
import { getProfile, setSession } from "../../services/Auth/User.service.js";

const FRONTEND_URL = process.env.FRONTEND_URL;

export const tokenSignIn = async (req, res) => {
  try {
    const { access_token, refresh_token } = req.body;

    const { data, error } = await supabaseAnon.auth.setSession({
      access_token,
      refresh_token,
    });

    const { session, user } = data;
    const profile = await getProfile(user.id);

    if (profile.status === "inactive") throw new Error("account_inactive");

    res.cookie("access_token", session.access_token, cookieConfig);
    res.cookie("refresh_token", session.refresh_token, refreshCookieConfig);

    return res.status(200).json({ message: "good", profile });
  } catch (e) {
    return res.status(500).json({ message: "failed api", e });
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
    return res.status(500).json({ mesage: "something went wrong" });
  }
};

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  try {
    const { data, error } = await supabaseAdmin.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${FRONTEND_URL}/update-password`,
      }
    );

    return res.status(200).json({ message: "good" });
  } catch (e) {
    return res.status(500).json({ message: "api failed" });
  }
};

export const updatePassword = async (req, res) => {
  const { password, access_token, refresh_token } = req.body;
  try {
    const { session, user } = await setSession(access_token, refresh_token);
    const { data, error } = await supabaseAnon.auth.updateUser({ password });
    if (error) throw error;
    res.cookie("access_token", session.access_token, cookieConfig);
    res.cookie("refresh_token", session.refresh_token, refreshCookieConfig);
    const profile = await getProfile(user.id);
    return res.status(200).json({ message: "good", profile });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "failed api" });
  }
};
