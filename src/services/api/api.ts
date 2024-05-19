import axios, {AxiosInstance} from 'axios'

const REQUEST_TIMEOUT = 5000

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: "http://51.250.92.221:5000/api",
    timeout: REQUEST_TIMEOUT,
  })

  return api
}
