import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      createProxyMiddleware('/api', {
        target: 'https://api.tripadvisor.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow requests from all origins
        },
        pathRewrite: {
          '^/api': '', // Remove the '/api' path prefix
        },
      }),
    ],
  },
});