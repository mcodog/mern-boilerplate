import express from "express";
import cors from "cors";
import morgan from "morgan";
import registerRoutes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

registerRoutes(app);

export default app;
