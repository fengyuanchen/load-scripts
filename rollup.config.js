const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * load-scripts v${pkg.version}
 * https://github.com/fengyuanchen/${pkg.name}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/load-scripts.js',
      format: 'umd',
      name: 'loadScripts',
    },
    {
      banner,
      file: 'dist/load-scripts.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/load-scripts.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    babel(),
  ],
};
