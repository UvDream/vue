<template>
  <div class="parent">
    <Children :love-you="data" @passData="getData"></Children>
  </div>
</template>

<script>
import Children from "@/components/Children";

export default {
  name: "Parent",
  components: {
    Children
  },
  data() {
    return {
      data: "I come from parent!"
    };
  },
  methods: {
    getData(data) {
      console.log(data);
    }
  }
};
</script>
