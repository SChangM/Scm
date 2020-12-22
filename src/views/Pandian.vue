<template>
  <div>
    <Titles title="盘点管理"></Titles>

    <div id="shuju">
      <div id="shaixuan">
        <p>
          <span>数据筛选</span>
          <span id="serch"></span>
        </p>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="盘点单号">
              <el-input v-model="formInline.user" placeholder="请输入/扫描单号"></el-input>
            </el-form-item>
            <el-form-item label="起始时间">
              <el-time-picker placeholder="选择时间"  style="width: 100%;"></el-time-picker>
            </el-form-item>
            <el-form-item label="单据状态">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="待审核" value="shanghai"></el-option>
                <el-option label="审核成功" value="beijing"></el-option>
                <el-option label="审核失败" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">
                <i class="el-icon-search"></i> 查询
              </el-button>
              <el-button type="reset" @click="onSubmit">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div id="liebiao">
        <div class="anniu">
          <div class="left">数据列表</div>
          <div class="right">
            <el-button>
              <i class="el-icon-plus"></i>新增
            </el-button>
            <el-button>
              <i class="el-icon-edit"></i>编辑
            </el-button>
            <el-button>
              <i class="el-icon-delete"></i> 删除
            </el-button>
            <el-button>
              <i class="el-icon-refresh"></i>刷新
            </el-button>
            <el-button>导出</el-button>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%" height="330">
          <el-table-column align="center" fixed prop="id" label="盘点单号" width="150"></el-table-column>
          <el-table-column align="center" prop="name" label="盘点类型" width="180"></el-table-column>
          <el-table-column align="center" prop="nameid" label="关联单号" width="180"></el-table-column>
          <el-table-column align="center" prop="type" label="状态" width="150"></el-table-column>
          <el-table-column align="center" prop="zhidan" label="制单人" width="170"></el-table-column>
          <el-table-column align="center" prop="date" label="创建时间" width="110"></el-table-column>
          <el-table-column align="center" fixed="right" label="操作" width="170">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
              <el-button type="text" size="small">审核</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="anniu">
          <div class="left">
          </div>
          <div class="right">
            <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.anniu {
  display: flex;
  height: 50px;
}
.anniu:nth-of-type(2) {
  margin-top: 20px;
}
.left {
  flex: 1;
  text-align: left;
  margin-left: 20px;
}
.right {
  flex: 1;
  text-align: right;
  margin-right: 20px;
}
#shuju {
  width: 1127px;
  height: 595px;
  margin-top: 20px;
  margin-left: 20px;
  background: white;
}
#shaixuan {
  height: 100px;
  margin-bottom: 20px;
}
#shaixuan > p {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
#shaixuan > p > span:first-of-type {
  float: left;
  margin-left: 20px;
}
#shaixuan > p > span:nth-of-type(2) {
  float: right;
  margin-right: 20px;
  color: blue;
  font-weight: 500;
}
form {
  border-top: 1px solid rgb(230, 227, 227);
  border-bottom: 1px solid rgb(230, 227, 227);
  width: 1107px;
  height: 80px;
  line-height: 80px;
  float: left;
  padding-left: 20px;
}
form > div > div {
  margin-top: 20px;
}
#liebiao {
  clear: both;
  width: 1127px;
  float: left;
  margin-top: 20px;
}
</style>

<script>
import Titles from "../components/Titles";
export default {
  components: {
    Titles
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      console.log("submit!");
    }
  },

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "审核成功",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
         id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
        id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        },
        {
        id: "0000131",
          name: "产品盘点",
          nameid: "000179",
          type: "等待审核",
          zhidan: "刘晓雯",
          date: "2016-05-02"
        }
      ]
    };
  }
};
</script>