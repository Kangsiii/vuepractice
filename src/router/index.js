import { createRouter, createWebHistory } from 'vue-router';
import Map from '../components/MapView.vue';
import Home from '../components/HomePage.vue';

const routes = [
  {
    path: '/mapview',
    name: 'Mapview',
    component: Map,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;