import express from "express";
import searchRoutes from "./routes/search.routes.js";

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Pin2Shop Backend Running");
});

app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});