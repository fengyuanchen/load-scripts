const puppeteer = require('puppeteer');

process.env.CHROME_BIN = puppeteer.executablePath();
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    files: [
      'dist/load-scripts.js',
      'test/index.spec.js',
      {
        pattern: 'test/scripts/*',
        included: false,
      },
    ],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    singleRun: true,
  });
};
