import dotenv from "dotenv";
dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL;

const allowedOrigins = [FRONTEND_URL];

export default corsConfig = {
  credentials: true,
  origin: allowedOrigins,
};
