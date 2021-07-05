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

  async get(...params) {
    this.auth()
    return await this.session.get(...params)
  };
  async post(...params) {
    this.auth()
    return await this.session.post(...params)
  };
  async put(...params) {
    this.auth()
    return await this.session.put(...params)
  };
  async patch(...params) {
    this.auth()
    return await this.session.patch(...params)
  };
  async remove(...params) {
    this.auth()
    return await this.session.delete(...params)
  };

  async checkLogin() {
    return { data: await this.get('/auth/token/introspection'), token: getToken() }
  }

  async auth({ VITE_API_CLIENT_ID, VITE_API_CLIENT_SECRET } = import.meta.env) {
    if (this.checkLogin) return { access_token: getToken() }

    const payload = await this.post('/auth/token', {
      grant_type: 'client_credentials',
      client_id: VITE_API_CLIENT_ID,
      client_secret: VITE_API_CLIENT_SECRET,
      scopes: 'api'
    })

    setToken(payload.data.access_token)
    this.session.defaults.headers.Authorization = `Bearer ${payload.data.access_token}`
console.log(this.session.defaults.headers.Authorization)
    return payload
  }
}

export default ApiService.instance
