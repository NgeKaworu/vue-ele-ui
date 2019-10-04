// initial state
const state = {
  loading: false
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  startLoading(state) {
    state.loading = true;
  },

  stopLoading(state) {
    state.loading = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
