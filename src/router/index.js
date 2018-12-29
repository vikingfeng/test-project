import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FirstPage from '@/components/FirstPage';
import SecondPage from '@/components/SecondPage';

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
    }
  ]
});
