import sharp from "sharp";
import path from "path";

function resizing(imgName: string, imgWidth: string, imgHeight: string) {
  const root_path = path.resolve(".");
  const imgPath = `${root_path}/images/${imgName}.jpg`;
  const imgWidthNum: number = parseInt(imgWidth);
  const imgHeightNum: number = parseInt(imgHeight);

  return sharp(imgPath).resize(imgWidthNum, imgHeightNum);
}

export default resizing;
