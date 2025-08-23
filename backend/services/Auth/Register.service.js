import supabaseAdmin from "../../config/supabase.cofig";

export async function adminCreateUser(formData) {
  const { data, error } = await supabaseAdmin.auth.admin.createUser(formData);
  if (error) throw error;
  return data;
}
