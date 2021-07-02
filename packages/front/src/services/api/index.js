import axios, { AxiosInstance } from "axios";
import { getToken, setToken } from '../../utils/token'

const singleton = Symbol('api')
const singletonEnforcer = Symbol('apiEnforcer')

class ApiService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }

    this.session = axios.create({
      baseURL: `${import.meta.env.VITE_API}`,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${getToken()}`,
      },
    })
  }

  static get instance() {
    // Try to get an efficient singleton
    if (!this[singleton]) {
      this[singleton] = new ApiService(singletonEnforcer)
    }

    return this[singleton]
  }

  async get (...params) { return await this.session.get(...params) };
  async post (...params) { return this.session.post(...params) };
  async put (...params) { return this.session.put(...params) };
  async patch (...params) { return this.session.patch(...params) };
  async remove (...params) { return  this.session.delete(...params) };

  async checkLogin() {
    return { data: await this.get('/auth/token/introspection'), token: getToken() }
  }

  async auth({ name, token }) {
    const payload = await this.post('login', {
      token: token,
      name: name,
    })

    setToken(payload.data.token)
    this.session.defaults.headers.Authorization = `Bearer ${payload.data.token}`

    return payload
  }
}

export default ApiService.instance
