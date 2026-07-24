import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Root domain (andyplank.me via CNAME) is served from '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
});
