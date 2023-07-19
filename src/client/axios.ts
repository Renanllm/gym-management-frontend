import axios from 'axios'

const apiBaseUrl = {
  local: 'http://localhost:3000',
  production: 'http://3.141.153.188:3000',
}

export const client = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? apiBaseUrl.production
      : apiBaseUrl.local,
  timeout: 1000,
})
