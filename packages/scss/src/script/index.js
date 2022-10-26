import { promisify } from "util";
import sass from "sass";
import Fs, { readFile, readFileSync, writeFile } from "fs";
import path from "path";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

const getComponents = () => {
  let allComponents = [];

  const types = ["atom", "foundation", "molecule"];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + "css"}`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

async function main(path, fileName) {
  const styleResult = await sassRenderPromise({
    file: path,
    outFile: `global.css`,
    outputStyle: "expanded",
    includePaths: ["src"],
  });
  console.log(styleResult.css.toString());

  await writeFilePromise(fileName, styleResult.css.toString());
}
main("src/global.scss", "lib/global.css");
console.log(getComponents());
getComponents().forEach((component) => {
  main(component.input, component.output);
});
