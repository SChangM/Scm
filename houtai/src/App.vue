<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 655px;
  display: flex;
}
#app > div:first-of-type {
  flex: 2;
  height: 655px;
  background: rgb(158, 151, 142);
}
</style>
