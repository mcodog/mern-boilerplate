import supabaseAdmin from "../../config/supabase.cofig.js";

export async function updateUser(id, formData) {
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .update(formData)
    .eq("id", id);
  if (error) throw error;
  return data;
}
