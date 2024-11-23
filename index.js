const express = require('express');
const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static('public'));
require('dotenv').config();


const clientRoutes = require("./routers/client/index.router.js");
clientRoutes(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});