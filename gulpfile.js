import gulp from 'gulp'
import { plugins } from './config/gulp-plugins.js'
import { path } from './config/gulp-settings.js'

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  // isWebP: !process.argv.includes('--nowebp'),
  // isImgOpt: !process.argv.includes('--noimgopt'),
  // isFontsReW: process.argv.includes('--rewrite'),
  gulp: gulp,
  path: path,
  plugins: plugins,
}

import { copy } from './config/gulp-tasks/copy.js'
import { copyCssLibs } from './config/gulp-tasks/copyCssLibs.js'
import { copyJsLibs } from './config/gulp-tasks/copyJsLibs.js'
import { reset } from './config/gulp-tasks/reset.js'
import { html } from './config/gulp-tasks/html.js'
import { server } from './config/gulp-tasks/server.js'
import { css } from './config/gulp-tasks/css.js'
import { js } from './config/gulp-tasks/js.js'
import { images } from './config/gulp-tasks/images.js'
import { ttfToWoff2, fonstStyle } from './config/gulp-tasks/fonts.js'
import { sprite } from './config/gulp-tasks/sprite.js'
import { zip } from './config/gulp-tasks/zip.js'
import { svgPreview } from './config/gulp-tasks/svgPreview.js'

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.libsCss, copyCssLibs)
  gulp.watch(path.watch.libsJs, copyJsLibs)
  gulp.watch(path.watch.libsCss, copy)
  gulp.watch(path.watch.libsJs, copy)
  gulp.watch(path.watch.pug, html)
  gulp.watch(path.watch.scss, css)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.icons, sprite)
}

const fonts = gulp.series(ttfToWoff2, fonstStyle)

const mainTasks = gulp.parallel(
  fonts,
  gulp.parallel(copy, copyCssLibs, copyJsLibs, html, css, js, images),
  gulp.series(sprite, svgPreview)
)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)

export { dev }
export { build }
export { deployZIP }

gulp.task('default', dev)
