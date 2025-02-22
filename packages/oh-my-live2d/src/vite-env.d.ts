/// <reference types="vite/client" />
declare const __VERSION__: string;
declare const __ENV__: 'dev' | undefined;

interface Window {
  PIXI: typeof import('pixi.js') & {
    live2d: typeof import('pixi-live2d-display');
  };
}
