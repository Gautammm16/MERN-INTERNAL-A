import express from "express";
import mongoose from "mongoose";
import RecipeRoutes from "./routes/Recepie.Routes.js"; // Fixed naming
import cors from "cors";

const port = 3000;
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/examquestion", {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true // Use new topology engine
})
.then(() => {
    console.log("Database connection established");
})
.catch(err => {
    console.error("Database connection error:", err);
});

// Enable CORS for frontend on localhost:5173
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/api", RecipeRoutes); // Fixed naming

// Gracefully handle server shutdown
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("Database connection closed");
    process.exit(0);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
