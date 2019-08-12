<template>
  <div>
    <button @click="btnClick">跨域</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bc: "",
      ws: ""
    };
  },
  methods: {
    btnClick() {
      this.ws.send("helloworld");
      // this.ws.send("jcj");
      // this.bc.postMessage("sdas");
    }
  },
  mounted() {
    this.ws = new WebSocket("ws://50.78.138.52:8089/websocket");
    this.ws.onopen = function() {
      console.log("Connection open ...");
    };
    // this.ws.onmessage = function(evt) {
    //   console.log("Received Message: " + evt.data);
    //   this.ws.close();
    // };
    this.ws.onclose = function() {
      console.log("Connection closed.");
    };
    // this.ws.onerror = function(evt) {
    //   console.log("error!!!");
    // };
    // this.bc = new BroadcastChannel("hello");
    // this.bc.onmessage = function(e) {
    //   if (e.data && window.parent) {
    //     window.parent.postMessage(e.data, "http://localhost:3001");
    //   }
    // };
  }
};
</script>
