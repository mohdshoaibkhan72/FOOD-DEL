import express from "express";
import cors from "cors";
import { connectDB } from "./config/Db.connection.js";

//app config
const app = express();
const port = 3000;

//midlewear
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server in reunning at Port : ${port}!`));
