<template>
  <div class="container">
    <section>
      <header>
        <i class="el-icon-menu"></i>
        <span>所有摄像机列表</span>
      </header>
      <div>
        <el-table
          :header-cell-style="{ background: '#f7f7f7' }"
          :data="tab1.data"
          style="width: 100%"
          height="100%"
        >
          <el-table-column prop="id" align="center" label="通道ID">
          </el-table-column>
          <el-table-column prop="name" align="center" label="摄像机名称">
          </el-table-column>
          <el-table-column prop="lng" align="center" label="经度">
          </el-table-column>
          <el-table-column prop="lat" align="center" label="纬度">
          </el-table-column>
          <el-table-column
            :formatter="formaterOnline"
            align="center"
            label="是否在线"
          >
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleAdd(scope.row.id)"
                >添加</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <footer>
        <el-pagination
          background
          @size-change="tab1SizeChange"
          @current-change="tab1CurrentChange"
          :current-page="tab1.page.currentPage"
          :page-sizes="tab1.page.pageSizes"
          :page-size="tab1.page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tab1.page.total"
        >
        </el-pagination>
      </footer>
    </section>
    <section>
      <header>
        <i class="el-icon-menu"></i>
        <span>地图展示摄像机列表</span>
      </header>
      <div>
        <el-table
          :header-cell-style="{ background: '#f7f7f7' }"
          :data="tab2.data"
          height="100%"
          style="width: 100%"
        >
          <el-table-column prop="id" align="center" label="通道ID">
          </el-table-column>
          <el-table-column prop="name" align="center" label="摄像机名称">
          </el-table-column>
          <el-table-column prop="lng" align="center" label="经度">
          </el-table-column>
          <el-table-column prop="lat" align="center" label="纬度">
          </el-table-column>
          <el-table-column
            :formatter="formaterOnline"
            align="center"
            label="是否在线"
          >
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <footer>
        <el-pagination
          background
          @size-change="tab2SizeChange"
          @current-change="tab2CurrentChange"
          :current-page="tab2.page.currentPage"
          :page-sizes="tab2.page.pageSizes"
          :page-size="tab2.page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tab2.page.total"
        >
        </el-pagination>
      </footer>
    </section>
  </div>
</template>

<script>
import { request } from "@/data/api";

export default {
  data() {
    return {
      tab1: {
        data: [],
        page: {
          total: 0,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 30, 50]
        }
      },
      tab2: {
        data: [],
        page: {
          total: 0,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 30, 50]
        }
      }
    };
  },
  methods: {
    tab1SizeChange(val) {
      this.tab1.page.pageSize = val;
      this.loadTab1();
    },
    tab1CurrentChange(val) {
      this.tab1.page.currentPage = val;
      this.loadTab1();
    },
    tab2SizeChange(val) {
      this.tab2.page.pageSize = val;
      this.loadTab2();
    },
    tab2CurrentChange(val) {
      this.tab2.page.currentPage = val;
      this.loadTab2();
    },
    // 添加
    handleAdd(id) {
      request({ url: "hikvision/add", data: { id } }).then(result => {
        if (result.code === 200) {
          this.$message({
            message: "添加成功！",
            type: "success"
          });
          this.loadTab2();
        } else {
          this.$message({
            message: "服务器错误！",
            type: "error"
          });
        }
      });
    },
    // 删除
    handleDelete(id) {
      request({ url: "hikvision/delete", data: { id } }).then(result => {
        if (result.code === 200) {
          this.$message({
            message: "删除成功！",
            type: "success"
          });
          this.loadTab2();
        } else {
          this.$message({
            message: "服务器错误！",
            type: "error"
          });
        }
      });
    },
    // 格式化是否在线
    formaterOnline(row) {
      return row.isOnline == 0 ? "离线" : "在线";
    },
    // 加载tab1
    loadTab1() {
      let _this = this;
      let { currentPage, pageSize } = _this.tab1.page;
      request({
        url: "hikvision/getAll",
        data: { currentPage, pageSize }
      }).then(result => {
        _this.tab1.page.total = result.total;
        _this.tab1.data = result.data;
      });
    },
    // 加载tab2
    loadTab2() {
      let _this = this;
      let { currentPage, pageSize } = _this.tab2.page;
      request({
        url: "hikvision/getSelected",
        data: { currentPage, pageSize }
      }).then(result => {
        _this.tab2.page.total = result.total;
        _this.tab2.data = result.data;
      });
    },
    // 初始化页面
    initPage() {
      this.loadTab1();
      this.loadTab2();
    }
  },
  mounted() {
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 20px 30px;
  color: #898989;

  & > section {
    height: calc(50% - 10px);
    background-color: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(77, 119, 158, 0.2);
    border-radius: 3px;
    padding: 10px;

    & > header {
      height: 30px;

      & > * {
        margin-left: 10px;
      }
    }

    & > div {
      height: calc(100% - 70px);
    }

    & > footer {
      margin-top: 10px;
      height: 30px;

      & > div {
        float: right;
      }
    }

    &:first-child {
      margin-bottom: 20px;
    }
  }
}
</style>
