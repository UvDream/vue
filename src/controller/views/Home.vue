<template>
  <section class="home-section">
    <div>
      <h3>单位分布</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group1"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>重点人员</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group2"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>重点小区</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group3"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
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
        <el-button
          type="primary"
          :key="item"
          v-for="item in group8"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>管控组工作量</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group9"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>各类别情报统计</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group10"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
      <h3>情报落地核查</h3>
      <el-row>
        <el-button
          type="primary"
          :key="item"
          v-for="item in group11"
          @click="btnClick(item)"
          plain
        >
          {{ item }}
        </el-button>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  props: ["ws"],
  data() {
    return {
      group1: ["企业", "商业小区", "动迁小区", "学校", "自然村"],
      group2: ["重点挑头", "积极参与", "关注人员"],
      group3: ["鑫茂东苑", "鑫茂花园", "市北锦苑", "合生颐庭", "市北花园"],
      group4: ["项光锋", "施保山", "王世海", "王禾英", "周福生"],
      group5: ["盛丽珍", "盛秀珍", "盛琴珍", "王伟江"],
      group6: [],
      group7: [],
      group8: ["情报线索", "指令单", "落地处置", "技侦在控", "网侦在控"],
      group9: ["群众工作组", "多位一体组", "情报行动组"],
      group10: [
        "12345",
        "派出所(人力情报)",
        "其他",
        "上级交办",
        "网侦",
        "信访"
      ],
      group11: ["传唤审查", "见面约谈", "外地协作", "电话约谈", "刑事拘留"]
    };
  },
  methods: {
    btnClick(name) {
      console.log("the signal is:" + name);
      this.ws.send(name);
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
