import { defineConfig } from 'vite';

import project from './package.json';

const { OML_ENV } = process.env;

export default defineConfig({
  define: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __VERSION__: JSON.stringify(project.version),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __ENV__: JSON.stringify(OML_ENV)
  },
  build: {
    target: 'es6',
    copyPublicDir: false,
    watch: OML_ENV === 'dev' ? { include: 'src/**' } : null,
    rollupOptions: {
      output: {
        chunkFileNames: 'oml2d.app.js'
      }
    }
  }
});
