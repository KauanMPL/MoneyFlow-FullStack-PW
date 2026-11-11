import cors from "cors";
import "dotenv/config";
import express from "express";
import {router} from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT=process.env.POST! || 3333;

app.listen(PORT,() => {
    console.log("Servidor rodando na porta" + PORT);
});