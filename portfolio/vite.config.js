import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    base: mode === 'production' ? '/portfolio/' : '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    define: {
      // Expose les variables d'environnement à l'application
      __BASE_URL__: JSON.stringify(env.VITE_APP_BASE_URL),
      __ASSETS_URL__: JSON.stringify(env.VITE_APP_ASSETS_URL),
      __API_URL__: JSON.stringify(env.VITE_APP_API_URL),
    }
  }
})
