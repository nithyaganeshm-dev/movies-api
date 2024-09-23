import express from "express";
import router from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
const port = 3000;

const app = express();

// connectDB
connectDB()

// CRUD Operations
app.use("/movies", router);

app.listen(port, () => {
  console.log(`Server listening to the port ${port}`);
});
