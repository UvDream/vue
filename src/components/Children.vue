<template>
  <div class="children">
    {{ loveYou }}
    <button @click="pass">点击按钮</button>
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
      this.$store.commit({
        type: "increment",
        amount: 10
      });
    }
  }
};
</script>
