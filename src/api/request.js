import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://auth.api.dev.viaapi.com/v1.0',
  timeout: 1000,
  headers: { 'Accept': 'application/json' }
});

export default instance