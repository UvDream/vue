import axios from "axios";

export default {
  request(url, data = {}, type = "post") {
    return new Promise((resolve, reject) => {
      axios
        .get("static/config.json")
        .then(result => {
          let config = result.data;
          // 初始化axios服务
          const _axios = axios.create({
            baseURL: config.isPublished
              ? config.remoteBaseUrl
              : config.localBaseUrl
          });
          // 解析接口名
          function resolveApi(url) {
            let urlArr = url.split("/"),
              result = config.api;
            urlArr.map(val => {
              result = result[val];
            });
            return config.isPublished ? result.remoteUrl : result.localUrl;
          }
          type = config.isPublished ? type : "get";
          return _axios({
            url: resolveApi(url),
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
  }
};
