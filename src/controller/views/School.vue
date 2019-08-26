<template>
  <section class="school-section">
    <el-row>
      <span>小学名称：</span>
      <strong>小区名</strong>
    </el-row>
    <h3>居住小区</h3>
    <el-row>
      <button>车辆数量</button>
      <button>重点车辆数量</button>
    </el-row>
    <Common></Common>
  </section>
</template>

<script>
import Common from "./Common";

export default {
  components: {
    Common
  }
};
</script>

<style lang="scss" scoped>
.school-section {
  padding: 20px;
}
</style>
