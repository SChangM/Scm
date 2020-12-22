<template>
  <div>
    <Titles title="库存台账"></Titles>

    <div id="shuju">
      <div id="shaixuan">
        <p>
          <span>数据筛选</span>
          <span id="serch"></span>
        </p>
        <div>
          <el-form
            size="mini"
            label-width="80px"
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item label="产品编号" size="mini">
              <el-input v-model="formInline.user1" class="sizes" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="产品名称">
              <el-input v-model="formInline.user2" class="sizes" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="仓库">
              <el-select v-model="formInline.region" class="sizes" placeholder="请选择">
                <el-option label="3号仓库" value="shanghai"></el-option>
                <el-option label="2号仓库" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品批次">
              <el-input v-model="formInline.user3" class="sizes" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">
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
            <el-button @click="open"><i class="el-icon-delete"></i> 删除</el-button>
            <!-- <el-button>
              <i class="el-icon-delete"></i> 删除
            </el-button> -->
            <el-button>
              <i class="el-icon-refresh"></i>刷新
            </el-button>
            <el-button>导出</el-button>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%" height="330">
          <el-table-column align="center" fixed prop="id" label="序号" width="100"></el-table-column>
          <el-table-column align="center" prop="nameid" label="产品编号" width="120"></el-table-column>
          <el-table-column align="center" prop="name" label="产品名称" width="280"></el-table-column>
          <el-table-column align="center" prop="guige" label="产品规格" width="100"></el-table-column>
          <el-table-column align="center" prop="price" label="类别" width="130"></el-table-column>
          <el-table-column align="center" prop="number" label="存储单位" width="100"></el-table-column>
          <el-table-column align="center" prop="type" label="仓库" width="140"></el-table-column>
          <el-table-column align="center" prop="kuwei" label="库位" width="140"></el-table-column>
        </el-table>
        <div class="anniu">
          <div class="left"></div>
          <div class="right">
            <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.sizes {
  width: 120px;
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
  margin-top: 25px;
}
#liebiao {
  clear: both;
  width: 1127px;
  float: left;
  margin-top: 20px;
}
.el-table td,.el-table th{
    padding: 8px 0;
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
    console.log(row)
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
    onSubmit() {
      this.formInline = {
        user1: "",
        user2: "",
        user3: "",
        region: ""
      };
    },
     open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
      }
  },

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user1: "",
        user2: "",
        user3: "",
        region: ""
      },
      tableData: [
        {
          id: "1",
          name: "B25-10000 汉贝克移动电源",
          nameid: "000189",
          price: "移动电源",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "3号仓库",
        },
        {
         id: "2",
          name: "J29A 浩方移动电源 10000mAh",
          nameid: "000189",
          price: "移动电源",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "3号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
         id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
         id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
        id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        },
        {
          id: "3",
          name: "U46 Type-C 三环硅胶充电数据线",
          nameid: "000189",
          price: "线材类",
          guige: "个",
          number: "个",
          kuwei: "默认报损库位",
          type: "2号仓库",
        }
      ]
    };
  }
};
</script>