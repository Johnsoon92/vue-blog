<template>
  <div class="home-page">
    <app-head></app-head>
    <b-alert show>{{message}}</b-alert>
  </div>
</template>

<script type="text/javascript">
  import AppHead from '@/components/AppHead'

  export default {
    name: 'HomePage',
    components: {
      AppHead
    },
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
    height: 600px;
    width: 100%;
  }
</style>
