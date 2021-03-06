import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Contact from '../views/Contact';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

export default router;
