const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log(`app are listening on port ${port}`);
})