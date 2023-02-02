import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import api from './api'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'


const app = createApp(App)
// app.provide('$http', api)
app.config.globalProperties.$http = api
app.use(mdiVue, {
    icons: mdijs
})
app.use(router).mount('#app')