import { getProfile } from "../services/Auth/User.service.js";

export const retrieveUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    console.log(userId);
    const profile = await getProfile(userId);
    return res.status(200).json({ message: "good", profile });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "api failed" });
  }
};
