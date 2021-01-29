import { createApp } from 'vue'
import electron from 'electron';
import DefineValueObject from '@/common/lib/DefineValueObject'
import App from './App.vue'
import router from './router/router'

electron.ipcRenderer.on('sendPath', (event, Path) => {
    DefineValueObject.appPath = Path;
})

electron.ipcRenderer.on('sendWindowSize', (event, Size) => {
    DefineValueObject.window_width = Size.CONST_WINDOW_WIDTH
    DefineValueObject.window_height = Size.CONST_WINDOW_HEIGHT
})

let app = createApp(App);
app.use(router).mount('#app')