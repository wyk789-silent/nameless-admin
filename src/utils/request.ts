import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
// import { getToken } from "@/utils/storage";

// 创建axios实例，设置请求参数
const service = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  }, //设置请求头
  baseURL: import.meta.env.VITE_BASE_URL, // 域名配置
  withCredentials: true, // 跨域请求时是否需要使用凭证
  timeout: 30000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (res.httpCode !== 200 && res.httpCode != undefined) {
      ElMessage({
        message: res.msg || res.data,
        type: "error",
        duration: 5 * 1000,
        showClose: true,
      });
      if (
        res.httpCode === 403 ||
        res.httpCode === 402 ||
        res.httpCode === 50014
      ) {
        ElMessageBox.confirm(
          "您已注销，可以取消以留在此页，或重新登录",
          "确认？",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          location.reload();
        });
      }
      return Promise.reject(res);
    } else {
      return Promise.resolve(res);
    }
  },
  function (error) {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
