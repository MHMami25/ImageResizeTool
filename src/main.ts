import { createApp } from 'vue'
import electron from 'electron';
import DefineValueObject from '@/common/lib/DefineValueObject'
import App from './App.vue'
import router from './router/router'

electron.ipcRenderer.on('sendPath', (event, Path) => {
    DefineValueObject.appPath = Path;
})

let app = createApp(App);
app.use(router).mount('#app')