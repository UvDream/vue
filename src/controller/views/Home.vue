<template>
  <section class="home-section">
    <div>
      <h3>单位分布</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[0]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>重点人员</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[1]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>重点小区</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[2]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>重点挑头、积极参与人员</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[3]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[4]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>涉稳情报</h3>
      <el-row>
        <button>第一条</button>
        <button>第二条</button>
        <button>第三条</button>
        <button>第四条</button>
        <button>第五条</button>
      </el-row>
      <el-row>
        <button>第六条</button>
        <button>第七条</button>
        <button>第八条</button>
        <button>第九条</button>
        <button>第十条</button>
      </el-row>
    </div>
    <div>
      <h3>单位分布</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[7]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>管控组工作量</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[8]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>各类别情报统计</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[9]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
      <h3>情报落地核查</h3>
      <el-row>
        <button
          :key="item.name"
          :class="{ active: item.isActive }"
          v-for="item in group[10]"
          @click="btnClick(item)"
        >
          {{ item.name }}
        </button>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  props: ["ws"],
  data() {
    return {
      group: [
        [
          { name: "企业", isActive: false },
          { name: "商业小区", isActive: false },
          { name: "动迁小区", isActive: false },
          { name: "学校", isActive: false },
          { name: "自然村", isActive: false }
        ],
        [
          { name: "重点挑头", isActive: false },
          { name: "积极参与", isActive: false },
          { name: "关注人员", isActive: false }
        ],
        [
          { name: "鑫茂东苑", isActive: false },
          { name: "鑫茂花园", isActive: false },
          { name: "市北锦苑", isActive: false },
          { name: "合生颐庭", isActive: false },
          { name: "市北花园", isActive: false }
        ],
        [
          { name: "项光锋", isActive: false },
          { name: "施保山", isActive: false },
          { name: "王世海", isActive: false },
          { name: "王禾英", isActive: false },
          { name: "周福生", isActive: false }
        ],
        [
          { name: "盛丽珍", isActive: false },
          { name: "盛秀珍", isActive: false },
          { name: "盛琴珍", isActive: false },
          { name: "王伟江", isActive: false }
        ],
        [],
        [],
        [
          { name: "情报线索", isActive: false },
          { name: "指令单", isActive: false },
          { name: "落地处置", isActive: false },
          { name: "技侦在控", isActive: false },
          { name: "网侦在控", isActive: false }
        ],
        [
          { name: "群众工作组", isActive: false },
          { name: "多位一体组", isActive: false },
          { name: "情报行动组", isActive: false }
        ],
        [
          { name: "12345", isActive: false },
          { name: "派出所(人力情报)", isActive: false },
          { name: "其他", isActive: false },
          { name: "上级交办", isActive: false },
          { name: "网侦", isActive: false },
          { name: "信访", isActive: false }
        ],
        [
          { name: "传唤审查", isActive: false },
          { name: "见面约谈", isActive: false },
          { name: "外地协作", isActive: false },
          { name: "电话约谈", isActive: false },
          { name: "刑事拘留", isActive: false }
        ]
      ]
    };
  },
  methods: {
    btnClick(item) {
      console.log("the signal is:" + item.name);
      this.group.map(val1 => {
        val1.map(val2 => {
          val2.isActive = val2.isActive && false;
          val2.isActive = val2.name === item.name;
        });
      });
      this.ws.send(item.name);
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
