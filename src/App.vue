<template>
  <div id="app">
    <!--顶栏-->
    <AppHead :menus="headMenus"></AppHead>
    <div style="margin-top: 56px; height: 100%;">
      <!--侧边栏-->
      <AppSidebar :menus="sideMenus"></AppSidebar>
      <!--页面主体-->
      <div class="app-content">
        <router-view></router-view>
      </div>
    </div>
    <!--底栏-->
    <!-- <AppFoot></AppFoot> -->
    <draggable></draggable>
  </div>
</template>

<script>
import AppHead from '@/components/AppHead'
import AppSidebar from '@/components/AppSidebar'
import AppFoot from '@/components/AppFoot'
import {mapState, mapGetters, mapActions} from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'App',
  components: {
    AppHead,
    AppSidebar,
    AppFoot,
    draggable,
  },
  computed: {
    ...mapState({
      headMenus: state => state.nav.headMenus,
    }),
    ...mapGetters({
      sideMenus: 'sideMenus',
    }),
  },
  created() {
    this.getUserInfo()
    this.getUserMenu()
  },
  methods: {
    ...mapActions({
      getUserInfo: 'getUserInfo',
      getUserMenu: 'getUserMenu',
    }),
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "assets/common.scss";
#app {
  height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-sidebar {
  float: left;
  width: 200px;
}
.app-content {
  margin-left: 200px;
  height: 100%;
}
.app-foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
}
</style>
