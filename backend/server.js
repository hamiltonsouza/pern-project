import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet()); // security middleware
app.use(morgan("dev")); // requests logger

app.get("/test", (req, res) => {
    res.send("test")
});

app.get("/", (req, res) => {
    res.send("test")
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
