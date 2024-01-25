import express from "express";
import cors from "cors";
import morgan from "morgan";
import __dirname from "./utils.js";
import MongoSingleton from "./database.js";
import config from "./config/config.js";

import notesRouter from "./routes/notes.router.js";

// Creating the app and adding middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));

MongoSingleton.getInstance();

// using routes as a middleware
app.use("/api/notes", notesRouter);

app.listen(config.port, () =>
  console.log(`Server running on PORT: ${config.port}`)
);
