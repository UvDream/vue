import axios from "axios";
import { resolveApi } from "../utils/utils";

// 发送请求，处理了发布与否
const request = (url, data = {}, type = "post") => {
  return new Promise((resolve, reject) => {
    axios
      .get("json/config.json")
      .then(result => {
        let config = result.data;
        // 初始化axios服务
        const _axios = axios.create({
          baseURL: config.isPublished
            ? config.remoteBaseUrl
            : config.localBaseUrl
        });

        type = config.isPublished ? type : "get";
        return _axios({
          url: resolveApi(config, url),
          data,
          type
        });
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

// 请求静态资源文件
const requestJson = url => axios.get(url);

export { request, requestJson };
