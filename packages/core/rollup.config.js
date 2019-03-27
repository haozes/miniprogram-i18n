import typescript from 'rollup-plugin-typescript';
import { uglify } from "rollup-plugin-uglify";

module.exports = {
  input: 'index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    uglify()
  ]
}
