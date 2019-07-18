<template>
  <a :href="url">
    {{ url }}
    <slot name="btn1"></slot>
    <slot name="btn2">{{ btnOne }}</slot>
  </a>
</template>

<script>
export default {
  name: "MyButton",
  props: ["url", "btn-one"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
