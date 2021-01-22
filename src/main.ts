import { create } from 'domain';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ErrorHandler from './common/lib/Error'

let app = createApp(App);

app.config.errorHandler = function (err: any) {
    ErrorHandler(err);
};

app.use(router).mount('#app')