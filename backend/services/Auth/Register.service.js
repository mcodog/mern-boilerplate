import supabaseAdmin from "../../config/supabase.cofig.js";

export async function adminCreateUser(formData) {
  const { data, error } = await supabaseAdmin.auth.signUp(formData);
  if (error) throw error;
  return data;
}
