import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FirstPage from '@/components/FirstPage';
import SecondPage from '@/components/SecondPage';
import FloatPage from '@/components/FloatPage';
import ClearPage from '@/components/ClearPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first-page',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/second-page',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/float-page',
      name: 'FloatPage',
      component: FloatPage
    },
    {
      path: '/clear-page',
      name: 'ClearPage',
      component: ClearPage
    }
  ]
});
