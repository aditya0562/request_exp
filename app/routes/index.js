const fetchProductsRoutes = require(./fetchProductsRoutes);

const initRoutes = (app) => {
  app.use(`/`, fetchProductsRoutes());
};

export default initRoutes;