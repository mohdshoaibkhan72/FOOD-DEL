// Server (app.js)
const express = require("express");
const connectDB = require("./config/Db.connection");
const Registeruser = require("./controllers/Register");

const app = express();
const port = 3000;

//connection DB
connectDB();

//middlwwear
app.use(express.json());

//Register Login
app.post("/register", Registeruser);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server is running at Port : ${port}!`));
