import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Viking Feng',
    level: '小白',
    way: ''
  },
  mutations: {
    setAuthor (state, author) {
      state.author = author;
    },
    promotionLevel (state, level) {
      state.level = level;
    },
    showWay (state, way) {
      state.way = way;
    }
  },
  actions: {
    changeAction (context) {
      context.commit('setAuthor', 'changebyaction');
    }
  }
});

export default store;
