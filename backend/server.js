import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet()); // security middleware
app.use(morgan("dev")); // requests logger

app.get("/", (req, res) => {
    res.send("test")
});

app.get("/test", (req, res) => {
    res.send("test")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
