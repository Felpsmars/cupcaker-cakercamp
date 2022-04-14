import axios from 'axios'

const http = axios.create({
  baseURL: 'https://6245b0fa2cfed1881725c1cf.mockapi.io/api',
  withCredentials: false,
})

export { http }
