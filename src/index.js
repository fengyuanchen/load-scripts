/**
 * Dynamic scripts loading for modern browsers.
 * @param {string} urls - The scripts to load.
 * @returns {Promise} - A Promise instance.
 */
export default function loadScripts(...urls) {
  return Promise.all(urls.map((url) => new Promise((resolve, reject) => {
    const parent = document.head || document.body || document.documentElement;

    // Avoid loading script repeatedly
    if (parent.querySelector(`script[src*="${url}"]`)) {
      resolve(url);
      return;
    }

    const script = document.createElement('script');
    const loadend = () => {
      script.onerror = null;
      script.onload = null;
    };

    script.onerror = () => {
      const err = new Error(`Failed to load script: ${url}`);

      err.url = url;
      loadend();
      reject(err);
    };
    script.onload = () => {
      loadend();
      resolve(url);
    };
    script.async = true;
    script.src = url;
    parent.appendChild(script);
  })));
}
