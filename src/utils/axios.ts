import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { Token } from '../types'
// import { Token } from '../types'

// Tạo instance Axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Thay đổi URL này thành URL API của bạn
  headers: {
    'Content-Type': 'application/json'
  }
})

// Cấu hình interceptor cho requests (optional)
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(Token.ACCESS_TOKEN) || ''
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Cấu hình interceptor cho responses (optional)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Bạn có thể xử lý dữ liệu ở đây (ví dụ: chuyển đổi dữ liệu trước khi trả về)
    return response
  },
  (error) => {
    // Xử lý lỗi response (ví dụ: thông báo lỗi khi có lỗi mạng, lỗi 500...)
    return Promise.reject(error)
  }
)

export default axiosInstance
