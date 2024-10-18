import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';

export const sprite = () => {
  return app.gulp
    .src(`${app.path.src.icons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../img/icons.svg',
          },
        },
        shape: {
          id: {
            separator: '',
            generator: '',
          },
          transform: [
            {
              /*svgo: {
							plugins: [
								{ removeXMLNS: true },
								{ convertPathData: false },
								{ removeViewBox: false },
							]
						}*/
            },
          ],
        },
        svg: {
          rootAttributes: {
            style: 'display: none;',
            'aria-hidden': true,
          },
          xmlDeclaration: false,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(app.gulp.dest(`${app.path.buildFolder}`));
};
