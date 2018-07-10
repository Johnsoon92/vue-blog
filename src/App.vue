<template>
  <div class="app">
    <!--顶栏-->
    <AppHead></AppHead>
    <div style="margin-top: 56px;">
      <!--侧边栏-->
      <AppSidebar></AppSidebar>
      <!--页面主体-->
      <div class="app-content">
        <router-view></router-view>
      </div>
    </div>
    <!--底栏-->
    <!-- <AppFoot></AppFoot> -->
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
  data() {
    return {

    }
  },
  created() {

  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "assets/common.scss";
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.app-head-b {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 80px;
}
.app-sidebar {
  float: left;
  width: 200px;
}
.app-content {
  margin-left: 200px;
}
.app-foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
}
</style>
