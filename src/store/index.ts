import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 2,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

export default store;
