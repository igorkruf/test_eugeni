import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    ggg: null,
  },
  getters: {
    ggg: (state) => state.ggg,
  },

  mutations: {
    set_ggg(state, payload) {
      state.ggg = payload.ggg;
    },
  },
  actions: {
    async set_ggg({ commit }, payload) {
      console.log("всё хорошо");
      console.log(payload.massege);
      let response = await axios.post("/api/set_ggg", {
        massege: payload.massege,
      });
      let te = response.data;
      console.l;
      console.log(te);
      commit("set_ggg", { ggg: te });
    },
  },
});
