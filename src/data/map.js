import { requestJson } from "./api";

const interfaces = {
  bounds: "json/map/home/bounds.json",
  points: "json/map/city/points.json",
  singlePointBounds: (name, type) => "json/map/" + type + "/" + name + ".json"
};

// 周市的边界数据
const getBounds = () => requestJson(interfaces.bounds);

// 周市点位数据
const getPoints = () => requestJson(interfaces.points);

// 获取一个点的数据
const getSinglePoint = (name, type) =>
  requestJson(interfaces.singlePointBounds(name, type));

export { getBounds, getPoints, getSinglePoint };
