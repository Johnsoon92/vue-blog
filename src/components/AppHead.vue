<template>
  <div class="app-head">
    {{message}}
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        message: 'AppHead'
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .app-head {
    background-color: yellow;
  }
</style>
