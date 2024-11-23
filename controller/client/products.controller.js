const Product = require("../../models/product.models");

module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.render("pages/client/products.pug", {
        products: products
    });
}