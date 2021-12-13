'use strict'

import {terser} from "rollup-plugin-terser";
import banner from "./banner.js";
import paths from "./paths";

const ESM = process.env.ESM === 'true'
const BsNAME = process.env.BsNAME

const toUpperCase = (str) => {
  return str.slice(-1).toUpperCase()
}

const inputOptions = [paths.src + `${BsNAME}/index.${ESM ? 'esm' : 'umd'}.js`]
const outputOptions = [
  {
    banner,
    file: paths.dist + `bootstrap-${BsNAME}-js.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    sourcemap: true
  },
  {
    banner,
    file: paths.dist + `bootstrap-${BsNAME}-js.min.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    plugins: [terser()],
    sourcemap: true
  },
]

const rollupConfig = {
  input: inputOptions,
  output: outputOptions
}

if (!ESM) {
  rollupConfig.output.forEach(currentOutput => {
    currentOutput.name = `bootstrap${toUpperCase(BsNAME)}Js`
  })
}


module.exports = rollupConfig
