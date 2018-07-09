<template>
  <b-nav class="app-sidebar">
    <b-nav-item>

    </b-nav-item>
    {{message}}
  </b-nav>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        message: 'AppSidebar',
        pages: [
          {
            name: '',
            route: '',
          }
        ]
      }
    },
    methods: {

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
