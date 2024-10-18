import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const css = () => {
  return (
    app.gulp
      // .src(app.path.src.scss, { sourcemaps: app.isDev })
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(
        sass({
          outputStyle: 'expanded',
        })
      )
      // .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      // .pipe(
      //   app.plugins.if(
      //     app.isBuild,
      //     autoprefixer({
      //       flexbox: false,
      //     })
      //   )
      // )
      // .pipe(app.gulp.dest(app.path.build.css))
      // .pipe(app.plugins.if(app.isBuild, cleanCss()))
      // .pipe(
      //   rename({
      //     extname: '.min.css',
      //   })
      // )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  )
}
