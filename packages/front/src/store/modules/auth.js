const state = {
  token: '',
  expire: 0,
  isLogged: false,
}

const actions = {
  disconnectAction({ commit }, data) {
    commit('disconnect', data)
  },
  loggingAction({ commit }, data) {
    commit('login', data)
  },
}

const getters = {
  isLogged: (state) => state.isLogged === true, // TODO enchance this function with expire mathematics
}

const mutations = {
  login(state, { token, expire }) {
    state.isLogged = true
    state.token = token
    state.expire = expire
  },
  disconnect(state) {
    state.isLogged = false
    state.token = ''
    state.expire = ''
  },
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
}
