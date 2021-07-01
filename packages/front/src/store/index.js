import { createStore } from 'vuex'
import { auth, theme } from './modules'

export default createStore({
  modules: {
    auth,
    theme
  }
})
