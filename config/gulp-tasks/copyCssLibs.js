export const copyCssLibs = () => {
  return app.gulp
    .src(app.path.src.libsCss)
    .pipe(app.gulp.dest(app.path.build.libsCss))
}
