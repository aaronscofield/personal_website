import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './layouts/App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[]
});

const app = createApp(App).mount('#app')
app.use(router)
