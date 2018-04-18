import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index.vue';
import product from '@/pages/product/product.vue';

Vue.use(Router);

export default new Router({
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
  ],
});
