<template>
  <div id="login">
    <div id="center2"></div>
    <div id="center">
      <div id="top">
        <div id="left">
          <img src="../assets/imgs/logo.png" />
        </div>
        <div id="right">
          <h2>和智云仓储管理系统</h2>
          <h2>HeZi Cloud Warehouse Management System</h2>
        </div>
      </div>
      <div id="bottom">
        <el-input class="username" placeholder="请输入用户名" v-model="username" clearable></el-input>
        <el-input class="username" placeholder="请输入密码" v-model="pwd" show-password></el-input>
        <span @click="denglu">
          <i class="el-icon-right"></i>
        </span>
        <div id="shows" v-show="show">
          <button class="btn" v-for="(item,index) in items" :key="item.id" @click="dianji(index)">{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
      show: false,
      items: [
        "用户名或密码不正确",
        "请填写用户名称",
        "请填写登录密码",
        "正常登录成功"
      ]
    };
  },
  methods: {
    denglu: (event) => {
      document.getElementById("shows").style.top = event.pageY - 190 + "px";
      document.getElementById("shows").style.left = event.clientX + "px";
      document.getElementById("shows").style.display="block"
    },
    dianji(index){
        if(index==3){
            this.$router.push({
                path:'/shouye'
            })
        }else{
            document.getElementById("shows").style.display="none"
            alert(this.items[index]);
            
        }
        
    }
       
  }
};
</script>

<style scoped>
.btn {
  width: 140px;
  margin-top: 5px;
  margin-left: 0px;
  background: rgb(189, 181, 181);
  height: 30px;
  border: none;
  border-radius: 5px;
}
.btn:first-of-type {
  margin-top: 5px;
}
#shows {
  width: 150px;
  height: 145px;
  position: absolute;
  top: 200px;
  left: 1100px;
  background: white;
}
.username {
  width: 300px;
  margin-left: 10px;
}
#center2 {
  width: 100%;
  height: 270px;
  background: black;
  opacity: 0.7;
  position: absolute;
  top: 30%;
}

#center {
  width: 100%;
  height: 270px;
  position: absolute;
  top: 30%;
}
#login {
  width: 100%;
  height: 655px;
  background-image: url("../assets/imgs/loginbck.jpg");
  background-size: cover;
}
#bottom {
  padding-top: 10px;
  width: 100%;
}
#bottom span {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 5px solid white;
  border-radius: 50%;
  line-height: 40px;
  font-size: 40px;
  font-weight: 1000;
  margin-left: 10px;
  color: white;
  position: relative;
  top: 10px;
  cursor: pointer;
}
#bottom span:hover {
  color: blue;
  border: 5px solid blue;
}
#top {
  padding-top: 50px;
  display: flex;
}
#left > img {
  height: 80px;
}
#left {
  flex: 2;
  text-align: right;
}
#right {
  flex: 5;
  text-align: left;
  color: white;
  font-size: 24px;
}
</style>