import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import index from '@/pages/index/index.vue';
import product from '@/pages/product/product.vue';
import login from '@/pages/login/login.vue';
import signin from '@/pages/login/components/signin/signin.vue';
import signup from '@/pages/login/components/signup/signup.vue';
import forget from '@/pages/login/components/forget/forget.vue';
import purchase from '@/pages/purchase/purchase.vue';
import cart from '@/pages/purchase/components/cart/cart.vue';
import contact from '@/pages/purchase/components/contact/contact.vue';
import download from '@/pages/download/download.vue';

Vue.use(Router);

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
