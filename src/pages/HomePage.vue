<template>
  <div class="home-page">
    <b-alert show>{{message}}</b-alert>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'HomePage',
    data() {
      return {
        message: 'hello'
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .home-page {

  }
</style>
