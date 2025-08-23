import AuthRoutes from "./Auth/Auth.routes.js";

export default function registerRoutes(app) {
  app.use("/api/auth", AuthRoutes);
}
