import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/postRoutes.js";
import db from "./src/provider/dbConnection.js";
dotenv.config();
const app = express();
app.use(express.json())
const port = process.env.PORT
app.use("/",routes);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

