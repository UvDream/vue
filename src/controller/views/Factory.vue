<template>
  <section class="factory-section">
    <el-row>
      <span>企业名称：</span>
      <strong>企业名</strong>
    </el-row>
    <h3>小区人数分布情况</h3>
    <el-row>
      <el-button type="primary" plain>小区1</el-button>
      <el-button type="primary" plain>小区2</el-button>
      <el-button type="primary" plain>小区3</el-button>
      <el-button type="primary" plain>小区4</el-button>
      <el-button type="primary" plain>小区5</el-button>
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
