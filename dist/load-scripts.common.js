/*!
 * load-scripts v1.0.1
 * https://github.com/fengyuanchen/load-scripts
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-09-19T12:57:32.024Z
 */

'use strict';

/**
 * Dynamic scripts loading for modern browsers.
 * @param {string} urls - The scripts to load.
 * @returns {Promise} - A Promise instance.
 */
function loadScripts() {
  for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
    urls[_key] = arguments[_key];
  }

  return Promise.all(urls.map(function (url) {
    return new Promise(function (resolve, reject) {
      var parent = document.head || document.body || document.documentElement; // Avoid loading script repeatedly

      if (parent.querySelector("script[src^=\"".concat(url, "\"]"))) {
        resolve(url);
        return;
      }

      var script = document.createElement('script');

      var loadend = function loadend() {
        script.onerror = null;
        script.onload = null;
      };

      script.onerror = function () {
        var err = new Error("Failed to load script: ".concat(url));
        err.url = url;
        loadend();
        reject(err);
      };

      script.onload = function () {
        loadend();
        resolve(url);
      };

      script.async = true;
      script.src = url;
      parent.appendChild(script);
    });
  }));
}

module.exports = loadScripts;
