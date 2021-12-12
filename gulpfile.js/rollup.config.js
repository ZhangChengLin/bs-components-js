'use strict'

const banner = require('./banner.js')
const {paths} = require('./gulpfile.paths')

const rollupConfig = {
  input: [paths.src + 'offcanvas/index.umd.js'],
  output: {
    banner,
    file: paths.dist + 'bootstrapOffcanvasJs.js',
    format: 'umd',
    generatedCode: 'es2015',
    sourcemap: true
  },
}

rollupConfig.output.name = 'bootstrapOffcanvasJs'

module.exports = rollupConfig
