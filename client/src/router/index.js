import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AddEventPage from '../views/AddEventPage.vue'
import CalendarPage from '../views/CalendarPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/add',
      name: 'addevent',
      component: AddEventPage
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarPage
    }
  ]
})

export default router
