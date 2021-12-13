const {src, dest, lastRun, watch, series, parallel} = require('gulp')
const rollup = require("rollup")
const npmDist = require('gulp-npm-dist')

const rollupConfig = require('../buildConfig/rollup.config')
const {paths} = require('../buildConfig/paths')

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
