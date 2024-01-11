const videoRoutes = require("../components/videoRoute");
/**
 * Init All routes here
 */
module.exports = (app) => {
  app.use("/api", videoRoutes);
};
