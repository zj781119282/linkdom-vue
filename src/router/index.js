import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import index from '@/pages/index/index.vue';
import product from '@/pages/product/product.vue';
import login from '@/pages/login/login.vue';
import signin from '@/pages/login/components/signin/signin.vue';
import signup from '@/pages/login/components/signup/signup.vue';
import forget from '@/pages/login/components/forget/forget.vue';

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
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = Cookies.get('isLogged');
  if (isLogged && isLogged === 'true') {
    to.path.includes('/login') ? next('index') : next();
    return;
  }
  next();
});

export default router;
