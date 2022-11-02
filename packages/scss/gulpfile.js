const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("styles", () => {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("lib"));
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.scss", (done) => {
    gulp.series(["clean", "styles"]);
  });
});
