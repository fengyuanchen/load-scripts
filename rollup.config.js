const babel = require('rollup-plugin-babel');
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package');

const name = changeCase.camelCase(pkg.name);
const banner = createBanner({
  data: {
    year: '2018-present',
  },
});

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
  ],
  plugins: [
    babel(),
  ],
};
