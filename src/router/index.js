import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import FirstPage from '@/components/FirstPage';
// import SecondPage from '@/components/SecondPage';
// import FloatPage from '@/components/FloatPage';
// import ClearPage from '@/components/ClearPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/second-page',
      name: 'SecondPage',
      component: () => import('@/views/vue-router/SecondPage')
    },
    {
      path: '/first-page',
      name: 'FirstPage',
      component: () => import('@/views/vue-router/FirstPage'),
      children: [
        {
          path: '/page-second',
          name: 'PageSecond',
          component: () => import('@/views/vue-router/SecondPage')
        }
      ]
    },

    {
      path: '/float-page',
      name: 'FloatPage',
      component: () => import('@/views/css/float/FloatPage')
    },
    {
      path: '/clear-page',
      name: 'ClearPage',
      component: () => import('@/views/css/float/ClearPage')
    }
  ]
});
