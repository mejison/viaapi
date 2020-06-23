import request from './request'

const auth = {
  login(data) {
    return request.post(`/login`, data)
  }
}

export default auth