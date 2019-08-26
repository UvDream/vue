import * as ZTMAP from "ztmap";

// 生成marker
const generateMarker = (router, option) => {
  let el = document.createElement("div");
  el.className = "marker-" + (option.type || "community");
  el.innerHTML = option.name;
  if (!option.addNoEvent) {
    el.className += " marker-detail";
    el.addEventListener("click", () => {
      let { name, type } = option;
      if (window.top === window) {
        let path =
          type === "special" ? `/city` : `/detail?name=${name}&type=${type}`;
        router.push({ path });
      } else {
        window.parent.postMessage({ name, type }, "http://50.78.138.6:7099");
      }
    });
  }
  return new ZTMAP.HtmlMarker(el, option.latlng, { draggable: false });
};

// 控制marker的显示
const handleMarkerDisplay = data => {
  Array.prototype.slice
    .call(document.getElementsByClassName("marker-detail"))
    .map(val => {
      val.style.display = "none";
    });
  data.map(val => {
    let className = "";
    switch (val) {
      case "学校":
        className = "marker-school";
        break;
      case "小区":
        className = "marker-community";
        break;
      case "企业":
        className = "marker-factory";
    }
    Array.prototype.slice
      .call(document.getElementsByClassName(className))
      .map(val => {
        val.style.display = "block";
      });
  });
};

export { generateMarker, handleMarkerDisplay };
