import { adminCreateUser } from "../../services/Auth/Register.service.js";
import { updateUser } from "../../services/Auth/User.service.js";

export const registerUser = async (req, res) => {
  const { email, password, username } = req.body;
  const formData = {
    email,
    password,
  };
  try {
    const registerData = await adminCreateUser(formData);
    const { user } = registerData;
    updateUser(user.id, { username });
    return res.status(200).json({ registerData });
  } catch (e) {
    return res.status(500).json({ message: "registration failed" });
  }
};
