const express = require('express');
const app = express();
const port = 9999;

app.set("views", "./views");
app.set("view engine" ,"pug");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Trang chủ");
});

app.get("/products", (req, res) => {
    res.send("Trang sản phẩm")
});
  
app.listen(port, () => {
console.log(`app listening on port ${port}`)
})