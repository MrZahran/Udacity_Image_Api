import express, { Application } from "express";
import routes from "./routes";
import convert from "./routes/api/convert";

const app: Application = express();
const port = 3000;

app.use("/", routes);
app.use("/convert", convert);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
