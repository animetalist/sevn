import gulp from 'gulp'
import file from 'gulp-file'
import cheerio from 'gulp-cheerio'

export const svgPreview = () => {
  const spritePath = `${app.path.build.html}img/icons.svg`

  return gulp.src(spritePath).pipe(
    cheerio({
      run: function ($) {
        const symbols = $('symbol')
        let previewContent = ''

        symbols.each(function () {
          const id = $(this).attr('id')
          previewContent += `<div class='item'><svg><use href="img/icons.svg#${id}"></use></svg>${id}</div>`
        })

        const template = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SVG Preview</title>
            <style>
              body {
                background-color: #eee;
              }
              svg {
                width: 40px;
                height: 40px;
              }
              .list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 16px;
              }
              .item {
                display: grid;
                place-items: center;
                gap: 8px;
              }
                h1 {text-align: center;}
            </style>
          </head>
          <body>
            <h1>Icons Preview</h1>
            <div class='list'>${previewContent}</div>
          </body>
          </html>
        `

        return file('icons.html', template, { src: true }).pipe(
          gulp.dest(app.path.build.html)
        )
      },
      parserOptions: { xmlMode: true },
    })
  )
}
