const gulp = require("gulp");
const terser = require("gulp-terser");
const header = require("gulp-header");
const rename = require("gulp-rename");

//path
const jquery_path = './node_modules/jquery/dist/jquery.min.js';
const bootstrap_css_path = './node_modules/bootstrap/dist/css/bootstrap.min.css';
const bootstrap_js_path = './node_modules/bootstrap/dist/js/bootstrap.min.js';
const popper_js_path = './node_modules/popper.js/dist/umd/popper.min.js';

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
        ' */\n\n',
    min: ""
};

gulp.task("min", min);
gulp.task("copy_static", copy_static);

function min(done) {
    gulp.src([bootstrap_modal_js_path])
        .pipe(terser({}))
        .pipe(header(Copyright.full, {package: pkg}))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./dist/"));
    gulp.src([bootstrap_modal_js_path])
        .pipe(header(Copyright.full, {package: pkg}))
        .pipe(gulp.dest("./dist/"));
    done();
}

function copy_static(done) {
    gulp.src([jquery_path, bootstrap_js_path, bootstrap_css_path, popper_js_path]).pipe(gulp.dest('./demoFiles/'));
    done();
}
