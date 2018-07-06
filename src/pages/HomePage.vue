<template>
  <div class="home-page">
    <div>
      <h2>Implement a triangle using pure css.</h2>
      You will see a triagnle after this word.
      <IconTriangle width="10px" :weight="1" orient="up"></IconTriangle>
      <IconTriangle orient="right"></IconTriangle>
      <IconTriangle orient="down"></IconTriangle>
      <IconTriangle orient="left"></IconTriangle>
    </div>
  </div>
</template>

<script type="text/javascript">
  import IconTriangle from '@/components/IconTriangle'

  export default {
    name: 'HomePage',
    components: {
      IconTriangle
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
    h2 {
      border-bottom: 1px solid #ccc;
    }
  }
</style>
