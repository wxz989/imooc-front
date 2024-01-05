import axios from 'axios'
console.log(import.meta.env.VITE_BASE_API)
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'helloqianduanxunlianying'
    return config // 必须返回配置
  }
)
export default service