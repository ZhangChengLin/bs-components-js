const {src, dest, lastRun, watch, series, parallel} = require('gulp')
const npmDist = require('gulp-npm-dist')

const paths = require('../buildConfig/paths')

const npmDistConfig = {
  copyUnminified: true,
  nodeModulesPath: paths.root,
  packageJsonPath: paths.root
}

const copyBsFiles = () => {
  return src(npmDist(npmDistConfig), {base: paths.node_modules})
    .pipe(dest(paths.dist))
}

module.exports = {
  copyBsFiles,
}
