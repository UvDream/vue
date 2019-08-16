<template>
  <section class="home-section">
    <div>
      <h3>单位分布</h3>
      <el-row>
        <el-button type="primary" plain>企业</el-button>
        <el-button type="primary" plain>商业小区</el-button>
        <el-button type="primary" plain>动迁小区</el-button>
        <el-button type="primary" plain>学校</el-button>
        <el-button type="primary" plain>自然村</el-button>
      </el-row>
      <h3>重点人员</h3>
      <el-row>
        <el-button type="primary" plain>重点挑头</el-button>
        <el-button type="primary" plain>积极参与</el-button>
        <el-button type="primary" plain>关注人员</el-button>
      </el-row>
      <h3>重点小区</h3>
      <el-row>
        <el-button type="primary" plain>鑫茂东苑</el-button>
        <el-button type="primary" plain>鑫茂花园</el-button>
        <el-button type="primary" plain>市北锦苑</el-button>
        <el-button type="primary" plain>合生颐庭</el-button>
        <el-button type="primary" plain>市北花园</el-button>
      </el-row>
      <h3>重点挑头、积极参与人员</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group4"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group5"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>涉稳情报</h3>
      <el-row>
        <el-button type="primary" plain>第一条</el-button>
        <el-button type="primary" plain>第二条</el-button>
        <el-button type="primary" plain>第三条</el-button>
        <el-button type="primary" plain>第四条</el-button>
        <el-button type="primary" plain>第五条</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" plain>第六条</el-button>
        <el-button type="primary" plain>第七条</el-button>
        <el-button type="primary" plain>第八条</el-button>
        <el-button type="primary" plain>第九条</el-button>
        <el-button type="primary" plain>第十条</el-button>
      </el-row>
    </div>
    <div>
      <h3>单位分布</h3>
      <el-row>
        <el-button type="primary" plain>情报线索</el-button>
        <el-button type="primary" plain>指令单</el-button>
        <el-button type="primary" plain>落地处置</el-button>
        <el-button type="primary" plain>技侦在控</el-button>
        <el-button type="primary" plain>网侦在控</el-button>
      </el-row>
      <h3>管控组工作量</h3>
      <el-row>
        <el-button type="primary" plain>群众工作组</el-button>
        <el-button type="primary" plain>多位一体组</el-button>
        <el-button type="primary" plain>情报行动组</el-button>
      </el-row>
      <h3>各类别情报统计</h3>
      <el-row>
        <el-button type="primary" plain>12345</el-button>
        <el-button type="primary" plain>派出所(人力情报)</el-button>
        <el-button type="primary" plain>其他</el-button>
        <el-button type="primary" plain>上级交办</el-button>
        <el-button type="primary" plain>网侦</el-button>
        <el-button type="primary" plain>信访</el-button>
      </el-row>
      <h3>情报落地核查</h3>
      <el-row>
        <el-button type="primary" plain>传唤审查</el-button>
        <el-button type="primary" plain>见面约谈</el-button>
        <el-button type="primary" plain>外地协作</el-button>
        <el-button type="primary" plain>电话约谈</el-button>
        <el-button type="primary" plain>刑事拘留</el-button>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  props: ["ws"],
  data() {
    return {
      group1: [],
      group2: [],
      group3: [],
      group4: ["项光锋", "施保山", "王世海", "王禾英", "周福生"],
      group5: ["盛丽珍", "盛秀珍", "盛琴珍", "王伟江"],
      group6: [],
      group7: [],
      group8: [],
      group9: []
    };
  },
  methods: {
    btnClick(name) {
      this.ws.send(name, "http://50.78.138.6:7099");
    }
  }
};
</script>

<style lang="scss" scoped>
.home-section {
  display: flex;

  & > div {
    width: 50%;
    height: 100%;
    padding: 0 20px;
  }
}

.el-row {
  margin-top: 10px;
}
</style>
