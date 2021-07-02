export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

const state = {
  theme: THEMES.DARK,
}

const actions = {
  setTheme({ commit }, data) {
    commit('setTheme', data)
  },
}

const getters = {
  isDefaultTheme: ({ theme }) => theme === THEMES.DARK,
  isLightTheme: (_, getters) => !getters.isDefaultTheme(),
}

const mutations = {
  setTheme(state, theme) {
    const formatedtheme = (theme && String(theme).toUpperCase()) || null
    state.theme = theme[formatedtheme] || theme.DARK
  },
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
}
