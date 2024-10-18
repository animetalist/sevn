import notify from 'gulp-notify';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';
import ifPlugin from 'gulp-if';
import rename from 'gulp-rename';
import browsersync from 'browser-sync';

export const plugins = {
  notify,
  if: ifPlugin,
  newer,
  plumber,
  browsersync,
  rename,
};
