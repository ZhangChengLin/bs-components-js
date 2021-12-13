'use strict'

import {terser} from "rollup-plugin-terser";
import banner from "./banner.js";
import paths from "./paths";


const inputOptions = [paths.src + 'offcanvas/index.umd.js']
const outputOptions = [
  {
    banner,
    file: paths.dist + 'bootstrap-offcanvas-js.js',
    format: 'umd',
    generatedCode: 'es2015',
    sourcemap: true
  },
  {
    banner,
    file: paths.dist + 'bootstrap-offcanvas-js.min.js',
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
