import cors from "cors";
import "dotenv/config";
import express from "express";
import routes from "./routes";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes.router);

const PORT = process.env.PORT! || 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na Porta " + PORT);
});