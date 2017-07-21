import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default api

export function setAPIToken(token) {
    api.defaults.headers['Authorization'] = !!token ? `JWT ${token}` : null
}