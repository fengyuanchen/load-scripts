declare module 'load-scripts' {
  export default function loadScripts(...urls: string[]): Promise<string[]>;
}
