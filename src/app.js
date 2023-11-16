import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connection to the bank made successfully!");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;