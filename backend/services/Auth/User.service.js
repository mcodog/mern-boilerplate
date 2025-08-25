import supabaseAdmin, { supabaseAnon } from "../../config/supabase.cofig.js";

export async function updateUser(id, formData) {
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .update(formData)
    .eq("id", id);
  if (error) throw error;
  return data;
}

export async function setSession(access_token, refresh_token) {
  const { data, error } = await supabaseAnon.auth.setSession({
    access_token,
    refresh_token,
  });

  if (error) throw error;
  return data;
}

export async function getProfile(id) {
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}
