// 解析路由
const resolveApi = (config, url, isIndex, data) => {
  let urlArr = url.split("/"),
    result = config.api;
  urlArr.map(val => {
    result = result[val];
  });
  let resultUrl = "";
  if (config.isPublished) {
    resultUrl = result.remoteUrl;
  } else {
    resultUrl += result.localUrl + "?";
    Object.keys(data).forEach(key => {
      resultUrl += `${key}=${data[key]}&`;
    });
    resultUrl = resultUrl.slice(0, -1);
  }
  return resultUrl;
};

export { resolveApi };
