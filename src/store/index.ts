import { createStore } from 'vuex'

export default createStore({
  state: {
   users:[] as any,
   id:0
  },
  getters: {
  
  },
  mutations: {
    IncId(state){
      state.id++
    },
    setUser(state,user){
      state.users.push(user);
    }
  },
  actions: {
    register({commit},user){
      commit("setUser",user)
    }
  },
  modules: {
  }
})
