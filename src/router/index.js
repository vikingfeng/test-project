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
      component: () => import('@/components/VueTest')
    },
    // 一、vue 模块
    {
      path: '/vue-page',
      name: 'VueTest',
      component: () => import('@/components/VueTest'),
      children: [
        {
          path: '/vue-index-page',
          name: 'VueIndexPage',
          component: () => import('@/views/vue-router/SecondPage')
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
          path: '/name-view',
          name: 'NameView',
          component: () => import('@/views/vue-router/NameView'),
          children: [
            {
              path: '/name-page-second',
              name: 'NamePageSecond',
              components: {
                default: () => import('@/views/vue-router/SecondPage'),
                view2: () => import('@/views/vue-router/FirstPage')
              }
            }
          ]
        },
        // vuex
        {
          path: '/vuex-test',
          name: 'VuexTest',
          component: () => import('@/views/vue-vuex/VuexTest'),
          children: [
            // {
            //   path: '/page-second',
            //   name: 'PageSecond',
            //   component: () => import('@/views/vue-router/SecondPage')
            // }
          ]
        }
      ]
    },
    // 二、css模块
    {
      path: '/css-page',
      name: 'Css',
      component: () => import('@/components/Css'),
      children: [
        {
          path: '/css-index-page',
          name: 'CssIndexPage',
          component: () => import('@/views/css/float/FloatPage')
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
    },
    // 三、JavaScript
    {
      path: '/js-page',
      name: 'JavaScript',
      component: () => import('@/components/JavaScript'),
      children: [
        {
          path: '/basic-concept',
          name: 'BasicConcept',
          component: () => import('@/views/JavaScript/BasicKnowledge/BasicConcept')
        },
        {
          path: '/chapter-page45',
          name: 'Chapter45',
          component: () => import('@/views/JavaScript/BasicKnowledge/Chapter45')
        }

      ]
    },
    // 四、Expansion
    {
      path: '/expansion-page',
      name: 'Expansion',
      component: () => import('@/components/Expansion'),
      children: [
        {
          path: '/execution-mechanism',
          name: 'ExecutionMechanism',
          component: () => import('@/views/expansion/ExecutionMechanism')
        }

      ]
    }

  ]
});
