import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7777,
  },
  css: {
    modules: {
      scopeBehaviour: 'local', // default is 'local', can be 'global'
      generateScopedName: '[name]__[local]___[hash:base64:5]', // custom naming pattern
      hashPrefix: 'my-custom-hash', // optional, default is empty string
    },
  },

})
