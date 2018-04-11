const puppeteer = require('puppeteer');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    autoWatch: false,
    basePath: '..',
    browsers: ['ChromeHeadlessWithoutSandbox'],
    customLaunchers: {
      ChromeHeadlessWithoutSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    files: [
      'dist/load-scripts.js',
      'test/index.js',
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
