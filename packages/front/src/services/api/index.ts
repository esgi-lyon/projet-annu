import axios, { AxiosInstance } from "axios";
import { getToken, setToken } from '../../utils/token'

class ApiService {
  private session: AxiosInstance;

  constructor() {
    this.session = axios.create({
      baseURL: `${process.env.VUE_APP_API}`,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    })
  }

  get = (...params) => this.session.get(...params)
  post = (...params) => this.session.post(...params)
  put = (...params) => this.session.put(...params)
  patch = (...params) => this.session.patch(...params)
  remove = (...params) => this.session.delete(...params)

  public async checkLogin() {
    return { data: await this.get('/auth/token/introspection'), token: getToken() }
  }

  public async auth({ name, token }) {
    const payload = await this.post('login', {
      token: token,
      name: name,
    })

    setToken(payload.data.token)
    this.session.defaults.headers.Authorization = `Bearer ${payload.data.token}`

    return payload
  }
}

export default ApiService