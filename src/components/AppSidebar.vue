<template>
  <div class="app-sidebar">
    <b-nav vertical v-for="menu in menus">
      <b-nav-item-dropdown v-if="menu.children && menu.children.length" :text="menu.menuName">
        <b-nav-item v-for="subMenu in menu.children" :to="{name: subMenu.index}">
          {{subMenu.menuName}}
        </b-nav-item>
      </b-nav-item-dropdown>
      <b-nav-item v-else :to="{name: menu.index}">
        {{menu.menuName}}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      menus: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .app-sidebar {
    background-color: lightblue;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
</style>
