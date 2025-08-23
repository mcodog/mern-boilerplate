import { adminCreateUser } from "../../services/Auth/Register.service.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const formData = {
    email,
    password,
  };
  try {
    const registerData = await adminCreateUser(formData);

    return res.status(200).json({ registerData });
  } catch (e) {
    return res.status(500).json({ message: "registration failed" });
  }
};
