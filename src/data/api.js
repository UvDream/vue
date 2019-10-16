import axios from "axios";
import { resolveApi } from "../utils/utils";
import { Promise } from "core-js";

// 缓存的配置文件
let cacheConfig;

// 发送请求，处理了发布与否
const request = ({ url, data = {}, type = "post", isIndex = false }) => {
  return new Promise(async (resolve, reject) => {
    // 如果缓存到session里面了就取出来，如果没有就请求一次
    if (sessionStorage.getItem("cacheConfig")) {
      cacheConfig = JSON.parse(sessionStorage.getItem("cacheConfig"));
    } else {
      await requstConfig(isIndex);
    }
    // 初始化axios服务
    const _axios = axios.create({
      baseURL: cacheConfig.isPublished
        ? cacheConfig.remoteBaseUrl
        : isIndex
        ? cacheConfig.indexLocalBaseUrl
        : cacheConfig.localBaseUrl
    });
    type = cacheConfig.isPublished ? type : "get";
    _axios({
      url: resolveApi(cacheConfig, url, isIndex, data),
      data,
      type
    })
      .then(result => {
        result.status === 200
          ? resolve(result.data)
          : reject("app has encoutered a " + result.status + " mistake!");
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 请求配置文件
const requstConfig = isIndex =>
  new Promise(resolve => {
    axios.get(`${isIndex ? "" : "../"}json/config.json`).then(result => {
      sessionStorage.setItem("cacheConfig", JSON.stringify(result.data));
      cacheConfig = result.data;
      resolve(result.data);
    });
  });

// 请求静态资源文件
const requestJson = url => axios.get(url);

export { request, requestJson, requstConfig };
