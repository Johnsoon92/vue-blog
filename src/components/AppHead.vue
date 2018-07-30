<template>
  <b-navbar class="app-head" toggleable fixed="top" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand :to="{name: 'home'}">
      SeanJohn
    </b-navbar-brand>
    <b-navbar-nav v-for="menu in menus">
      <b-nav-item :to="{name: menu.index}" @click="setHeadIndex(menu.index)">
        {{menu.menuName}}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar >
</template>

<script type="text/javascript">
  import {mapActions} from 'vuex'
  export default {
    props: {
      menus: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      $route(val) {
        this.setHeadIndex(this.$route.path.split('/')[1])
      },
    },
    created() {
      this.setHeadIndex(this.$route.path.split('/')[1])
    },
    methods: {
      ...mapActions({
        setHeadIndex: 'setHeadIndex',
      })
    },
  }
</script>
