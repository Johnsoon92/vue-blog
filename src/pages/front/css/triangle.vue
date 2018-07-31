<template>
  <div class="page-triangle">
    <h2>Implement a triangle using pure css.</h2>
    <div class="center">
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
    components: {
      IconTriangle
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .page-triangle{
  }
</style>
