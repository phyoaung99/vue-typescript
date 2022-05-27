import { createStore } from "vuex";
export interface State {
  users: string[];
  id: number;
}
export default createStore<State>({
  state: {
    users: [],
    id: 0,
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.users.push(user);
      state.id += 1;
    },
  },
  actions: {
    register(context, user) {
      context.commit("SET_USER", user);
    },
  },
  modules: {},
});
