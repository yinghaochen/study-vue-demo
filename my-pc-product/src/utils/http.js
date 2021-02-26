import axios from 'axios';
import { Promise } from 'core-js';

const getBaseUrl = (env) => {
  let base = {
    production:'/',
    development: 'http://localhost:3000',
    test: 'http://localhost:3001'
  }[env]
  if (!base) {
    base = '/'
  }
  return base
}
class NewAxios {
  constructor() {
    this.baseURL = getBaseUrl(process.env.NODE_ENV)
    this.timeout = 100000
    this.withCredentials = true
  }
  request (option) {
    const instance = axios.create()
    const config = {
      ...option,
      baseURL: this.baseURL,
      withCredentials: this.withCredentials,
      timeout: this.timeout
    }
    this.setInterceptors(instance, option.url)
    return instance(config)
  }
  setInterceptors = (instance, url) => {
    if (url === '/usr'){
      console.log(url)
    }
    instance.interceptors.request.use((config) => {
      //  添加loading
      config.headers.AuthorizationToken = localStorage.getItem('AuthorizationToken') || ''
      return config
    }, err => Promise.reject(err))
    instance.interceptors.response.use((response)=>{
      //移除loading
      console.log(response)
      return response
    }, (err)=>{
      if (err.response) {
        switch (err.response.status) {
          case '403':
            console.log(err.response.status)
            break;
        
          default:
            console.log('服务器出错啦！')
            break;
        }
        return Promise.reject(err.response)
      }
      if (!window.navigator.online) {
        return -1
      }
      return Promise.reject(err.response)
    })
  }
}
export default new NewAxios;