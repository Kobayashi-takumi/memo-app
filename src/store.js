import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memoData: '',
  },
  mutations: {
    setMemoData(state, memoData) {
      state.memoData = memoData;
    }
  },
  getters: {
    memoData(state) {
      return state.memoData
    }
  },
  actions: {

  }
})
