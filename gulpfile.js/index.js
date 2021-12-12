const {src, dest, lastRun, watch, series, parallel} = require('gulp')
const terser = require("gulp-terser")
const rollup = require("rollup")
const rename = require("gulp-rename");
const npmDist = require('gulp-npm-dist')

const rollupConfig = require('./rollup.config')
const {paths} = require('./gulpfile.paths')

const npmDistConfig = {
  copyUnminified: true,
  nodeModulesPath: paths.root,
  packageJsonPath: paths.root
}

const copyBsFiles = () => {
  return src(npmDist(npmDistConfig), {base: paths.node_modules})
    .pipe(dest(paths.dist))
}

const rollupBuild = () => {
  return rollup.rollup(rollupConfig)
}

module.exports = {
  copyBsFiles,
  rollupBuild,
}
