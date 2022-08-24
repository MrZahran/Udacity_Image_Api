import express from "express";
const convert = express.Router();
import fs from "fs";
import path from "path";
import resizing from "../../utils/resizing";

convert.get("/", (req: express.Request, res: express.Response) => {
  const root_path = path.resolve(".");
  const imgName = req.query.name as string;
  const imgWidth: string = req.query.width as string;
  const imgHeight: string = req.query.height as string;
  const fullNameImg = `${imgName}_${imgWidth}_${imgHeight}.jpg`;
  const outputPath = `${root_path}/output_images/${fullNameImg}`;

  if (
    imgName === undefined ||
    imgWidth === undefined ||
    imgHeight === undefined
  ) {
    res.send("Please Add Data");
  }

  // Check If Image Exist Before Converting Start
  const imagesFiles = fs.readdirSync(`${root_path}/images/`);
  const outputFiles = fs.readdirSync(`${root_path}/output_images/`);

  if (outputFiles.includes(fullNameImg)) {
    // Meaning The Image Is Exist.
    console.log("Image Already Exist.");
    res.sendFile(outputPath);
  } else if (!imagesFiles.includes(`${imgName}.jpg`)) {
    res.send("This Images Not Exist.");
  } else {
    /***
     *** Resize Function
     ***/
    resizing(imgName, imgWidth, imgHeight).toFile(outputPath, () => {
      console.log("Image Created.");
      res.sendFile(outputPath);
    });
  }
});

export default convert;
