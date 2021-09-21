export default function loadScripts(...urls: string[]): Promise<string[]> {
  return Promise.all<string>(urls.map((url) => new Promise((resolve, reject) => {
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
      loadend();
      reject(new Error(`Failed to load script: ${url}`));
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
