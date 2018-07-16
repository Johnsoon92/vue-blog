<template>
  <b-navbar class="app-head" toggleable fixed="top" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand :to="{name: 'home'}">
      SeanJohn
    </b-navbar-brand>
    <b-navbar-nav v-for="menu in menus">
      <b-nav-item>
        {{menu.menuName}}
      </b-nav-item>
    </b-navbar-nav>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{name: 'front'}" @click="">
          前端
        </b-nav-item>
        <b-nav-item-dropdown text="后端" right>
          <b-dropdown-item :to="{name: 'java'}">
            JAVA
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-form>
          <b-form-input class="mr-sm-2" type="text" placeholder="搜索..."></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit">搜索</b-button>
        </b-nav-form> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar >
</template>

<script type="text/javascript">
  export default {
    props: {
      menus: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
      }
    },
    methods: {

    },
  }
</script>
