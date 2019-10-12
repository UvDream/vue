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
        >
          <el-table-column prop="id" align="center" label="通道ID" width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="摄像机名称"
            width="180"
          >
          </el-table-column>
          <el-table-column prop="lng" align="center" label="经度">
          </el-table-column>
          <el-table-column prop="lat" align="center" label="纬度">
          </el-table-column>
          <el-table-column prop="isOnline" align="center" label="是否在线">
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleAdd(scope.row)"
                >添加</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <footer>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
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
          style="width: 100%"
        >
          <el-table-column prop="id" align="center" label="通道ID" width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="摄像机名称"
            width="180"
          >
          </el-table-column>
          <el-table-column prop="lng" align="center" label="经度">
          </el-table-column>
          <el-table-column prop="lat" align="center" label="纬度">
          </el-table-column>
          <el-table-column prop="isOnline" align="center" label="是否在线">
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <footer>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
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
import axios from "axios";

export default {
  data() {
    return {
      tab1: {
        data: [
          {
            id: 1,
            name: 2,
            lng: 3,
            lat: 4,
            isOnline: 5,
            operation: 6
          }
        ],
        page: {
          total: 100,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 20, 30]
        }
      },
      tab2: {
        data: [
          {
            id: 1,
            name: 2,
            lng: 3,
            lat: 4,
            isOnline: 5,
            operation: 6
          }
        ],
        page: {
          total: 100,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 20, 30]
        }
      }
    };
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    handleAdd(row) {},
    handleDelete(row) {},
    initTab1() {
      let _this = this;
      let { currentPage, paseSize } = _this.tab2.page;
      axios.post("/getAllCamera", { currentPage, paseSize }).then(result => {});
    },
    initTab2() {
      axios.post("/getSelectedCamera", {});
    },
    initPage() {}
  },
  mounted() {}
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
      height: calc(100% - 60px);
    }

    & > footer {
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
