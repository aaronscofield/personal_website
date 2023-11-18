import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './layouts/App.vue'

function lazyLoad(view){
    return() => import(`@/components//${view}/${view}.vue`)
}

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: lazyLoad('Home')},
        { path: '/resume', component: lazyLoad('Resume')},
        { path: '/cafe-tracker', component: lazyLoad('CafeTracker')}
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
