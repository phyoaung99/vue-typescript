import { useSSRContext } from 'vue';
import { createStore } from 'vuex'

export default createStore({
  state: {
   users:[] as any,
   id:0
  },
  getters: {
  
  },
  mutations: {
    setUser(state,user){
      state.users.push(user);
      state.id +=1
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
