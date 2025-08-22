export default function registerRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Hello WOrlds");
  });
}
