import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";
import { InMemoryBeersRepository } from "./infrastructure/InMemoryBeersRepository";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

const beersRepository = new InMemoryBeersRepository();

loadApiEndpoints(app, beersRepository);

export default app;
