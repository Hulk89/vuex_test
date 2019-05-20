/* store.js */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCounter: function (state) {
        return state.count;
    }
  },
  mutations: {  /* 동기적 로직 */
    increment (state, payload) {
        state.count += payload.value  
    },
    decrement (state, payload) {
        state.count -= payload.value
    }
  },
  actions: {  /* 비동기 로직 표함 */
    increment_delay(context, payload) {
        return setTimeout(function() {
            context.commit('increment', payload) /* 비동기 처리가 끝난 후 mutations 호출! */
        }, 1000)
    }
  }
})
