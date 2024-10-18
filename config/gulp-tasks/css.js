import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import fs from 'fs'
import path from 'path'

const sass = gulpSass(dartSass)

// Шлях до основного SCSS файлу
const mainScssPath = './src/scss/style.scss'
// Шлях до вихідного основного CSS файлу
const mainCssPath = './build/css/style.css'

export const css = () => {
  // Компіляція SCSS файлів
  return app.gulp
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
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
    .on('end', () => {
      // Створення основного CSS файлу з правильними імпортами
      fs.readFile(mainScssPath, 'utf8', (err, data) => {
        if (err) {
          throw err
        }

        const updatedImports = data.replace(/@import '(.*)';/g, (match, p1) => {
          return `@import '${p1}.css';`
        })

        fs.writeFile(mainCssPath, updatedImports, (err) => {
          if (err) {
            throw err
          }
        })
      })
    })
}
