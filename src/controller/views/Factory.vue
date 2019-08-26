<template>
  <section class="factory-section">
    <el-row>
      <span>企业名称：</span>
      <strong>企业名</strong>
    </el-row>
    <h3>小区人数分布情况</h3>
    <el-row>
      <button>小区1</button>
      <button>小区2</button>
      <button>小区3</button>
      <button>小区4</button>
      <button>小区5</button>
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
.factory-section {
  padding: 20px;
}
</style>
