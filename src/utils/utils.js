// 解析路由
const resolveApi = (config, url, isIndex, data) => {
  let urlArr = url.split("/"),
    result = config.api;
  urlArr.map(val => {
    result = result[val];
  });
  let resultUrl = "";
  if (config.isPublished) {
    resultUrl = config.remoteBaseUrl + result.remoteUrl;
  } else {
    resultUrl = isIndex ? config.indexLocalBaseUrl : config.localBaseUrl;
    resultUrl += result.localUrl + "?";
    Object.keys(data).forEach(key => {
      resultUrl += `${key}=${data[key]}&`;
    });
  }
  return resultUrl.slice(0, -1);
};

export { resolveApi };
