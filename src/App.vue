<template>
  <div id="app">
    <!--顶栏-->
    <AppHead></AppHead>
    <!--侧边栏-->
    <AppSidebar></AppSidebar>
    <!--页面主体-->
    <router-view></router-view>
    <!--底栏-->
    <AppFoot></AppFoot>
  </div>
</template>

<script>
import AppHead from '@/components/AppHead'
import AppSidebar from '@/components/AppSidebar'
import AppFoot from '@/components/AppFoot'

export default {
  name: 'App',
  components: {
    AppHead,
    AppSidebar,
    AppFoot,
  },
  created() {

  },
}
</script>

<style>
@import "assets/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
