import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Add from './components/Add.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/add', component: Add }
  ]
});


export default router;
