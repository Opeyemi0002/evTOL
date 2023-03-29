import express from "express";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";
import router from "./userRoute/router.js";
dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.Port || 3000;
app.use(express.json());
app.use('/users', router);


app.listen(PORT, ()=> console.log(`server running at ${PORT}`));