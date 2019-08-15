// 解析路由
const resolveApi = (config, url) => {
  let urlArr = url.split("/"),
    result = config.api;
  urlArr.map(val => {
    result = result[val];
  });
  return config.isPublished ? result.remoteUrl : result.localUrl;
};

export { resolveApi };
