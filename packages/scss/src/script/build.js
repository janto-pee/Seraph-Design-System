const sass = require("node-sass");
const Path = require("path");
const Fs = require("fs");

const result = sass.renderSync({
  file: "src/global.scss",
  outputStyle: "expanded",
  includePaths: [Path.resolve("src")],
});
console.log(result.css.toString());
