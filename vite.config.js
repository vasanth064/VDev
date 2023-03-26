import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react()],
});
