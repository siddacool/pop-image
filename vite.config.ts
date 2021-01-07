import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    // gh-pages: uncomment the next line and replace <repoName> with actual name og github repo
    // base: '/<repoName>/',
    assetsDir: 'assets',
  },
});
