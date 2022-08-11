import { createStore } from 'vuex'

export default createStore({
  state: {
    token: "",
    phono: 0,
    yzm: 0,
    num:0
  },
  getters: {
  },
  mutations: {
    setPhono(state, v) {
      state.phono = v
      console.log("手机号更改了，新值为"+state.phono);
    },
    setNum(state,v){
      state.num = v
    },
    setYzm(state, v) {
      state.yzm = v
    },
    setToken(state,v){
      state.token = v
      console.log("token更改了，新值为"+state.token);
    }

  },
  actions: {
  },
  modules: {
  }
})
