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
    }
  },
  mounted() {
    this.ws = new WebSocket("ws://50.78.138.52:8089/websocket");
    this.ws.onopen = function() {
      console.log("Connection open ...");
    };
    this.ws.onclose = function() {
      console.log("Connection closed.");
    };
  }
};
</script>
