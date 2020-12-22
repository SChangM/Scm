<template>
  <div>
    <Titles title="入库管理"></Titles>

    <div id="shuju">
      <div id="shaixuan">
        <p>
          <span>数据筛选</span>
          <span id="serch">高级搜索</span>
        </p>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="入库单号">
              <el-input v-model="formInline.user1" placeholder="请输入/扫描单号"></el-input>
            </el-form-item>
            <el-form-item label="单据类型">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="采购收货入库" value="shanghai"></el-option>
                <el-option label="销售退货入库" value="beijing"></el-option>
                <el-option label="生产产品入库" value="beijing"></el-option>
                <el-option label="领用退还入库" value="beijing"></el-option>
                <el-option label="借货入库" value="beijing"></el-option>
                <el-option label="借出入库" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="入库单状态">
              <el-select v-model="formInline.user2" placeholder="请选择">
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
            <el-button @click="add()">
              <i class="el-icon-plus"></i>新增
            </el-button>
            <el-button>
              <i class="el-icon-edit"></i>编辑
            </el-button>
            <el-button @click="open">
              <i class="el-icon-delete"></i> 删除
            </el-button>
            <el-button>
              <i class="el-icon-refresh"></i>刷新
            </el-button>
            <el-button>导出</el-button>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%" height="330">
          <el-table-column align="center" fixed prop="id" label="订单号" width="100"></el-table-column>
          <el-table-column align="center" prop="name" label="产品名称" width="80"></el-table-column>
          <el-table-column align="center" prop="nameid" label="产品编号" width="80"></el-table-column>
          <el-table-column align="center" prop="price" label="批次" width="90"></el-table-column>
          <el-table-column align="center" prop="guige" label="规格" width="50"></el-table-column>
          <el-table-column align="center" prop="number" label="数量" width="70"></el-table-column>
          <el-table-column align="center" prop="kuwei" label="库位" width="110"></el-table-column>
          <el-table-column align="center" prop="type" label="入库类型" width="110"></el-table-column>
          <el-table-column align="center" prop="gongying" label="供应商" width="80"></el-table-column>
          <el-table-column align="center" prop="zhidan" label="制单人" width="70"></el-table-column>
          <el-table-column align="center" prop="type" label="状态" width="110"></el-table-column>
          <el-table-column align="center" prop="shenhe" label="审核人" width="70"></el-table-column>
          <el-table-column align="center" prop="date" label="审核时间" width="110"></el-table-column>
          <el-table-column align="center" fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button
                type="text"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                size="small"
              >删除</el-button>
              <el-button type="text" size="small">审核</el-button>
              <el-button type="text" size="small">打印</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="anniu">
          <div class="left"></div>
          <div class="right">
            <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div id="zhezhao" v-if="show">

    </div>
    <div id="add" v-if="show">

    </div>
  </div>
</template>
<style >
#zhezhao{
  width: 1145px;
  height:655px;
  background: black;
  opacity: 0.6;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 50;
}
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
    add(){
      this.show=true;
      alert(2)
    },
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      this.formInline = {
        user1: "",
        user2: "",
        region: ""
      };
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteRow(index, rows) {
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
  },

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      show:false,
      formInline: {
       user1: "",
        user2: "",
        region: ""
      },
      tableData: [
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        },
        {
          id: "RKD100001",
          name: "设备箱",
          nameid: "000184",
          price: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          type: "销售退货入库",
          gongying: "华为科技",
          zhidan: "李明喜",
          status: "等待审核",
          shenhe: "刘晓雯",
          date: "2016-05-02"
        }
      ]
    };
  }
};
</script>