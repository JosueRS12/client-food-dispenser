import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import store from './stores'

// createApp(App).use(store).use(router).mount('#app')

// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
