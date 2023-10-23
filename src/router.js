import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Add from './components/Add.vue';
import Details from './components/Details.vue'
import Edit from './components/Edit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name:"home", component: Home },
    { path: '/add', name:"add", component: Add },
    { path: '/home/:id', name:'details', component: Details, props: true },
    { path: '/edit/:id', name:'edit', component: Edit, props: true },
  ]
});


export default router;
