import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import '@swc/plugin-styled-components';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react({ plugins: [['@swc/plugin-styled-components', {}]] })],
});
