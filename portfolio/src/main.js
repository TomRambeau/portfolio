import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { updateThemeClass } from './store/theme.js'

// Initialiser le thème
updateThemeClass()

const app = createApp(App)
app.use(router)
app.mount('#app')
