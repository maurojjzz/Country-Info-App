import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"
import { router } from "./routes/index.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})