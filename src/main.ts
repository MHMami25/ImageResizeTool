import { create } from 'domain';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

let app = createApp(App);

app.use(router).mount('#app')