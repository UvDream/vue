<template>
  <section class="community-section">
    <el-row>
      <span>小区名称：</span>
      <strong>小区名</strong>
    </el-row>
    <h3>车辆信息</h3>
    <el-row>
      <button>车辆数量</button>
      <button>重点车辆数量</button>
    </el-row>
    <h3>政府机关</h3>
    <el-row>
      <button>公职人员</button>
      <button>党员</button>
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
