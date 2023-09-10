import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './layouts/App.vue'
import About from './components/About/About.vue'
import Resume from './components/Resume/Resume.vue'
import CafeTracker from './components/CafeTracker/CafeTracker.vue'
import Home from './components/Home/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: About},
        { path: '/', component: Home},
        { path: '/resume', component: Resume},
        { path: '/cafe-tracker', component: CafeTracker}
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
