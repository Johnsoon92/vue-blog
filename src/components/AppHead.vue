<template>
  <b-navbar class="app-head" toggleable>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>
      SeanJohn
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          前端
        </b-nav-item>
        <b-nav-item-dropdown text="后端" right>
          <b-dropdown-item>
            JAVA
          </b-dropdown-item>
          <b-dropdown-item>
            MySql
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-form>
          <b-form-input class="mr-sm-2" type="text" placeholder="搜索..."></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit">搜索</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar >
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .app-head {
  }
</style>
