import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isSignIn: false,
    memoData: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSignIn(state, isSignIn) {
      state.isSignIn = isSignIn;
    },
    setMemoData(state, memoData) {
      state.memoData = memoData;
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignIn(state){
      return state.isSignIn
    },
    memoData(state) {
      return state.memoData
    }
  },
  actions: {

  }
})
