import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cv',
      name: 'CV',
      component: () => import('../views/CV.vue'),
    },
    {
      path: '/egg',
      name: 'EasterEgg',
      component: () => import('../views/Egg.vue'),
    },
  ],
});

export default router;
