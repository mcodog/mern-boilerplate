import express from "express";
import cors from "cors";
import morgan from "morgan";
import registerRoutes from "./routes/index.js";
import corsConfig from "./config/cors.config.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors(corsConfig));
app.use(morgan("tiny"));
app.use(cookieParser());

registerRoutes(app);

export default app;
