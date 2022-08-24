import express from "express";
const imgs = express.Router();

imgs.get("/", (req: express.Request, res: express.Response) => {
  // res.send("imgs");
  console.log(__dirname);
  // res.redirect(`${__dirname}/images/1.jpg`);
  res.sendFile(`${__dirname}/images/1.jpg`);
});

export default imgs;
