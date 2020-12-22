<template>
  <div id="shouye">
    <div>
      <el-menu router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <router-link to tag="span">工作台</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>快捷功能
            </el-menu-item>
            <el-menu-item index="/shouye/gailan">
                数据概览
            </el-menu-item>
            <el-menu-item index="/shouye/ruku">入库管理</el-menu-item>
            <el-menu-item index="/shouye/chuku">出库管理</el-menu-item>
            <el-menu-item index="/shouye/pandian">盘点管理</el-menu-item>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>报表分析
            </el-menu-item>
            <el-menu-item index="/shouye/taizhang">仓库台账</el-menu-item>
            <el-menu-item index="/shouye/yujing">库存预警</el-menu-item>
            <el-menu-item index="/shouye/qingdan">库存清单</el-menu-item>
            <el-menu-item index="/shouye/jizhang">财务记账</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <router-link to tag="span">仓库管理</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>出入库管理
            </el-menu-item>
            <el-menu-item index="/shouye/ruku">入库管理</el-menu-item>
            <el-menu-item index="/shouye/chuku">出库管理</el-menu-item>
            <el-menu-item index="/shouye/yiku">移库管理</el-menu-item>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>盘点调拨管理
            </el-menu-item>
            <el-menu-item index="/shouye/baosun">报损管理</el-menu-item>
            <el-menu-item index="/shouye/pandian">盘点管理</el-menu-item>
            <el-menu-item index="/shouye/diaobo">调拨管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <router-link to tag="span">业务管理</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>采购销售管理
            </el-menu-item>
            <el-menu-item index="/shouye/caigouguanli">采购管理</el-menu-item>
            <el-menu-item index="/shouye/caigoutuihuo">采购退货</el-menu-item>
            <el-menu-item index="/shouye/xiaoshouguanli">销售管理</el-menu-item>
            <el-menu-item index="/shouye/xiaoshoutuihuo">销售退货</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <router-link to tag="span">财务管理</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>财务数据
            </el-menu-item>
            <el-menu-item index="/shouye/caiwuleibie">财务类别</el-menu-item>
            <el-menu-item index="/shouye/yingshou">应收管理</el-menu-item>
            <el-menu-item index="/shouye/yingfu">应付管理</el-menu-item>
            <el-menu-item index="/shouye/jizhang">财务记账</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <router-link to tag="span">报表管理</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>报表数据
            </el-menu-item>
            <el-menu-item index="/shouye/qingdan">库存清单</el-menu-item>
            <el-menu-item index="/shouye/kechu">可出库存</el-menu-item>
            <el-menu-item index="/shouye/qichu">期初期末</el-menu-item>
            <el-menu-item index="/shouye/taizhang">存库台账</el-menu-item>
            <el-menu-item index="/shouye/yujing">库存预警</el-menu-item>
            <el-menu-item index="/shouye/rongliang">库存容量</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <router-link to tag="span">基础资料</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>仓库资料
            </el-menu-item>
            <el-menu-item index="/shouye/canguan">仓库管理</el-menu-item>
            <el-menu-item index="/shouye/kuweiguan">库位管理</el-menu-item>
            <el-menu-item index="/shouye/sheguan">设备管理</el-menu-item>
            <el-menu-item index="/shouye/jiliang">计量单位</el-menu-item>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>供应商资料
            </el-menu-item>
            <el-menu-item index="/shouye/gongyingguan">供应商管理</el-menu-item>
            <el-menu-item index="/shouye/kehuguan">客户管理</el-menu-item>
            <el-menu-item index="/shouye/chanpinlei">产品类别</el-menu-item>
            <el-menu-item index="/shouye/chanpinguan">产品管理</el-menu-item>
            <el-menu-item index="/shouye/chengyunguan">承运商管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <router-link to tag="span">系统设置</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>用户管理
            </el-menu-item>
            <el-menu-item index="/shouye/user">员工管理</el-menu-item>
            <el-menu-item index="/shouye/juese">角色管理</el-menu-item>
            <el-menu-item index="/shouye/bumen">部门管理</el-menu-item>
            <el-menu-item disabled>
              <i class="el-icon-notebook-2"></i>权限管理
            </el-menu-item>
            <el-menu-item index="/shouye/quanxian">权限分配</el-menu-item>
            <el-menu-item index="/shouye/ziyuan">资源管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#shouye {
  display: flex;
}
#shouye > div:first-of-type {
  flex: 2;
  height: 655px;
  overflow: auto;
  background:#545c64 ;
}
#shouye > div:nth-of-type(2) {
  flex: 9;
  background: rgb(221, 218, 218);
}
</style>