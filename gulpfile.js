const {task, src, dest, lastRun, watch} = require('gulp');
const terser = require("gulp-terser");
const header = require("gulp-header");
const rename = require("gulp-rename");

//path
const bootstrap_css_path = './node_modules/bootstrap/dist/css/bootstrap.*css';
const bootstrap_bundle_js_path = './node_modules/bootstrap/dist/js/bootstrap.bundle*.js';

const bootstrap_modal_js_path = "./src/bootstrap-modal-js.js";


//header Copyright
const pkg = require('./package.json');
const Copyright = {
  full:
    '/*!\n' +
    ' * Name: <%= package.name %>\n' +
    ' * Version: <%= package.version %>\n' +
    ' * Author: <%= package.author.name %>\n' +
    ' * Email: <%= package.author.email %>\n' +
    ' * Description: <%= package.description %>\n' +
    ' * Copyright (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
    ' * Licenses: <%= package.license %>\n' +
    ' * under the MIT License (license terms are at https://opensource.org/licenses/MIT).\n' +
    ' * GitHub: <%= package.github %>\n' +
    ' * issues: <%= package.bugs.url %>\n' +
    ' */\n\n',
  min: ""
};

task("dist_min", dist_min);
task("copy_static", copy_static);
task("watch_file", watch_file);

function dist_min(done) {
  src([bootstrap_modal_js_path], {since: lastRun(dist_min)})
    .pipe(header(Copyright.full, {package: pkg}))
    .pipe(dest("./dist/"));
  src([bootstrap_modal_js_path])
    .pipe(terser({}))
    .pipe(header(Copyright.full, {package: pkg}))
    .pipe(rename({suffix: ".min"}))
    .pipe(dest("./dist/"));
  done();
}

function copy_static(done) {
  src([bootstrap_bundle_js_path, bootstrap_css_path])
    .pipe(dest('./demoFiles/'));
  done();
}

function watch_file(done) {
  watch(bootstrap_modal_js_path, task("dist_min"));
  done();
}
