import { setToken } from '../../utils/token'
import api from '../api'
import { useStore } from 'vuex'

export default async function () {
  const store = useStore()
  try {
    const { data, token } = await api.checkLogin()
    if (!token && !data.active) {
      throw new Error('Missing or Bad token')
    }
    store.commit('auth/login', { data, token })
    return true
  } catch (e) {
    setToken(null)
    store.commit('auth/disconnect')
    return false
  }
}