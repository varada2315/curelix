import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7026,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['curelix.cyberpunk.co.in', '.cyberpunk.co.in'],
  },
});

