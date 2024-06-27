import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sass from 'sass';
import { defineConfig, loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: [{ find: /^~/, replacement: '' }]
    },
    plugins: [
      react(),
      reactRefresh(),
      viteTsconfigPaths(),
    ],
    server: {
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: env.VITE_API_ENDPOINT,
          changeOrigin: true,
          secure: false
        }
      },
      open: true,
      port: 3000,
      host: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
    build: {
      outDir: 'build'
    }
  };
});
