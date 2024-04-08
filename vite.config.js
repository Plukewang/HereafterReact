import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';
export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react(), vitePluginSvgr()],
    server: {    
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000  
      port: 3000, 
  },
  };
  
});