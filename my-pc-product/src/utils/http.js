import axios from 'axios';

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

}