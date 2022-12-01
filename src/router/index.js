import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Alarm from '../components/AlarmList.vue'

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
      component: Alarm
    },
  ]
})

export default router
