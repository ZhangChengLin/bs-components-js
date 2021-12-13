'use strict'

import {terser} from "rollup-plugin-terser";

const banner = require('./banner.js')
const {paths} = require('./paths')

const inputOptions = [paths.src + 'offcanvas/index.umd.js']
const outputOptions = [
  {
    banner,
    file: paths.dist + 'bootstrapOffcanvasJs.js',
    format: 'umd',
    generatedCode: 'es2015',
    sourcemap: true
  },
  {
    banner,
    file: paths.dist + 'bootstrapOffcanvasJs.min.js',
    format: 'umd',
    generatedCode: 'es2015',
    plugins: [terser()],
    sourcemap: true
  },
]

const rollupConfig = {
  input: inputOptions,
  output: outputOptions
}


rollupConfig.output.forEach(currentOutput => {
  currentOutput.name = 'bootstrapOffcanvasJs'
})


module.exports = rollupConfig
