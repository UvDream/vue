<template>
  <section class="community-section">
    <el-row>
      <span>小区名称：</span>
      <strong>小区名</strong>
    </el-row>
    <h3>车辆信息</h3>
    <el-row>
      <el-button type="primary" plain>车辆数量</el-button>
      <el-button type="primary" plain>重点车辆数量</el-button>
    </el-row>
    <h3>政府机关</h3>
    <el-row>
      <el-button type="primary" plain>公职人员</el-button>
      <el-button type="primary" plain>党员</el-button>
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
.community-section {
  padding: 20px;
}
</style>
