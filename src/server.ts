import "dotenv/config";
import express from "express";
import searchRoutes from "./routes/search.routes.js";
import { errorHandler } from "./errors/error.middleware.js";


const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Pin2Shop Backend Running");
});

app.use("/api/search", searchRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});