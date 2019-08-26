// 解析路由
const resolveApi = (config, url) => {
  let urlArr = url.split("/"),
    result = config.api;
  urlArr.map(val => {
    result = result[val];
  });
  return config.isPublished
    ? config.remoteBaseUrl + result.remoteUrl
    : config.localBaseUrl + result.localUrl;
};

export { resolveApi };
