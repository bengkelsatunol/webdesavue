import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from './components/AboutView.vue'
import HomeView from './components/HomeView.vue'
import ServiceView from './components/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServiceView
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
