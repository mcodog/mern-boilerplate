import AuthRoutes from "./Auth/Auth.routes.js";
import UserRoutes from "./User.routes.js";

export default function registerRoutes(app) {
  app.use("/api/auth", AuthRoutes);
  app.use("/api/users", UserRoutes);
}
