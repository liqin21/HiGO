import axios from 'axios'

export function baseRequest(config) {
  // 1 创建实例
  const instance = axios.create({
    //http://123.207.32.32:8000/api/wh/home/data?page=1&type=sell
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  });

  // 2 设置拦截器
  instance.interceptors.request.use(config => {
    // 对请求体进行拦截，可以进行一些设置
    return config;
  },error => {
    console.log(error);
  });
  instance.interceptors.response.use(response => {
    // 对响应做一些设置
    return response.data;
  },error => {
    return error;
  });

  // 发送请求
  return instance(config);
}
