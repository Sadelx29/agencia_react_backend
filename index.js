import express from "express";
import { PORT } from "./config.js";
import indexrouter from "./routes/index.routes.js";
import gestorroutes from "./routes/gestor.routes.js";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());
app.use(indexrouter);
app.use(gestorroutes);
app.listen(PORT);
console.log(`listeing port ${PORT}`);
