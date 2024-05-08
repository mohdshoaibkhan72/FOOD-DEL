const express = require("express");

//app config
const app = express();
const port = 3000;

//midlewear

//db connection

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server in reunning at Port : ${port}!`));
