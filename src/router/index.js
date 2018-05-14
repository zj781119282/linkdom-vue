import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import loading from '@/components/loading/loading.vue'

Vue.use(Router);

const index = () => import('@/pages/index/index.vue');
const product = () => import('@/pages/product/product.vue');
const login = () => import('@/pages/login/login.vue');
const signin = () => import('@/pages/login/components/signin/signin.vue');
const purchase = () => import('@/pages/purchase/purchase.vue');
const signup = () => import('@/pages/login/components/signup/signup.vue');
const forget = () => import('@/pages/login/components/forget/forget.vue');
const cart = () => import('@/pages/purchase/components/cart/cart.vue');
const contact = () => import('@/pages/purchase/components/contact/contact.vue');
const download = () => import('@/pages/download/download.vue');

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        {
          path: '/login',
          redirect: '/login/signin',
        },
        {
          path: '/login/signin',
          name: 'signin',
          component: signin,
        },
        {
          path: '/login/signup',
          name: 'signup',
          component: signup,
        },
        {
          path: '/login/forget',
          name: 'forget',
          component: forget,
        },
      ],
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: purchase,
      children: [
        {
          path: '/purchase',
          redirect: '/purchase/cart',
        },
        {
          path: '/purchase/cart',
          name: 'cart',
          component: cart,
        },
        {
          path: '/purchase/contact',
          name: 'contact',
          component: contact,
        },
      ],
    },
    {
      path: '/download',
      name: 'download',
      component: download,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = Cookies.get('isLogged');
  if (isLogged && isLogged === 'true') {
    to.path.includes('/login') ? next('index') : next();
    return;
  } else {
    to.path.includes('/purchase') ? next('index') : next();
    return;
  }
  next();
});

export default router;
