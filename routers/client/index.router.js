const homeRouter = require("./home.router.js");
const productRouter = require("./products.router.js");

module.exports = (app) => {
    app.use("/", homeRouter);
    app.use("/products", productRouter);
}