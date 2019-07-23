<template>
  <div class="about">
    <button @click="shuffle">点击动画</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "About",
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
