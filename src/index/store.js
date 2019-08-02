import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outerMapUrl:
      "http://192.168.2.160:8081/geoserver/gwc/service/tms/1.0.0/kld:kld_mb@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
    innerMapUrl:
      "http://50.78.138.55:8080/geoserver/gwc/service/tms/1.0.0/ks:ks_mb@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
    mapFontsUrl: "/assets/fonts/{fontstack}/{range}.pbf",
    mapSpriteUrl: "/assets/images/sprite/sprite"
  },
  getters: {},
  mutations: {},
  actions: {}
});
