import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'

import './styles/main.scss'

const app = createApp(App)

function bootstrap() {
  setupStore(app)

  app.use(router)

  app.mount('#app')
}

bootstrap()
