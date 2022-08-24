import express from "express";
const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello From Home Page");
});

export default routes;
