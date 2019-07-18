<template>
  <div class="children">
    {{ loveYou }}
    <button @click="pass"></button>
  </div>
</template>
<script>
export default {
  name: "Children",
  props: ["love-you"],
  data() {
    return {
      data: "I come from children!"
    };
  },
  methods: {
    pass() {
      this.$emit("passData", this.data);
    }
  }
};
</script>
