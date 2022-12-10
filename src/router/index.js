import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AlarmList from '@/components/AlarmList.vue'
import Configuration from '@/components/Configuration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alarms',
      name: 'alarms',
      component: AlarmList
    },
    {
      path: '/config',
      name: 'configurations',
      component: Configuration
    }
  ]
})

export default router
