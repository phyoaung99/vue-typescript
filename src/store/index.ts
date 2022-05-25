import { createStore } from 'vuex'

export default createStore({
  state: {
   user:[],
   id:1
  },
  getters: {
  
  },
  mutations: {
    IncId(state){
      state.id++
    }
  },
  actions: {
    
  },
  modules: {
  }
})
