import fs from "fs";
import path from "path";
import resizing from "../../utils/resizing";

it("Check if Image Exist.", () => {
  const fullNameImg = "1_400_600.jpg";
  const root_path = path.resolve(".");
  const outputFiles = fs.readdirSync(`${root_path}/output_images/`);

  expect(outputFiles.includes(fullNameImg)).toBeTrue();
});

/*
    Test for image processing
    Create image by function resizing
    And check generate image is now exists
*/

const root_path = path.resolve(".");
const outputFiles = fs.readdirSync(`${root_path}/output_images/`);
resizing("1", "400", "600").toFile(
  `${root_path}/output_images/1_400_600.jpg`,
  () => {
    console.log("Image Created.");
  }
);

it("Check if Image Exist After Created It.", () => {
  expect(outputFiles.includes("1_400_600.jpg")).toBeTrue();
});
