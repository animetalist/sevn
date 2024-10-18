import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./build`
const srcFolder = `./src`

export const path = {
  build: {
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/`,
    libsCss: `${buildFolder}/css/`,
    libsJs: `${buildFolder}/js/`,
  },
  src: {
    pug: `${srcFolder}/*.pug`,
    js: `${srcFolder}/js/scripts.js`,
    // scss: `${srcFolder}/scss/style.scss`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    libsJs: `${srcFolder}/js/libs/*.js`,
    libsCss: `${srcFolder}/scss/libs/*.css`,
    icons: `${srcFolder}/icons/*.svg`,
  },
  watch: {
    pug: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/**/*.scss`,
    js: `${srcFolder}/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp, svg}`,
    icons: `${srcFolder}/icons/*.svg`,
    libsJs: `${srcFolder}/js/libs/*.js`,
    libsCss: `${srcFolder}/scss/libs/*.css`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
  srcFolder: srcFolder,
  ftp: `applications/__markup/public_html`,
}
