export const copyJsLibs = () => {
  return app.gulp
    .src(app.path.src.libsJs)
    .pipe(app.gulp.dest(app.path.build.libsJs))
}
