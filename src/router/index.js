import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'
import SoapBubblesView from '../views/SoapBubblesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/soap-bubbles',
    name: 'SoapBubblesView',
    component: SoapBubblesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
