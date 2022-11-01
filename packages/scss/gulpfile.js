const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("styles", () => {
  return gulp
    .src("./src/global.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("lib"));
});

gulp.task("watch", () => {
  gulp.watch("sass/**/*.scss", (done) => {
    gulp.series(["clean", "styles"]);
  });
});
