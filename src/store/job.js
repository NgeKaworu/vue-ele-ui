import * as api from '@/api/job'

export default {
  namespaced: true,
  // initial state
  state: {
    allTime: [],
    wordCloud: {}
  },

  // getters
  getters: {

  },

  // actions
  actions: {
    fetchAllTime: async ({ commit }) => {
      const { data } = await api.fetchAllTime();
      commit('saveAllTime', data)
    },
    fetchWordCloudWithTime: async ({ commit }, payload) => {
      const { data } = await api.fetchWordCloudWithTime(payload);
      commit('saveWordCloud', data)
    }
  },

  // mutations
  mutations: {
    saveAllTime(state, payload) {
      state.allTime = payload
    },
    saveWordCloud(state, { createTime, classify }) {
      state.wordCloud[createTime] = classify
    }
  },
};
