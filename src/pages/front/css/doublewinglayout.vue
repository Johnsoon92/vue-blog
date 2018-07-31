<template>
  <DoubleWingLayout>
    <div slot="middle" style="margin-right:10px;background-color:#f00;">
      middle
    </div>
    <div slot="left" style="margin-right:10px;background-color:#0f0;">
      left
    </div>
    <div slot="right" style="margin-right:10px;background-color:#00f;">
      right
    </div>
  </DoubleWingLayout>
</template>

<script type="text/javascript">
  import DoubleWingLayout from '@/components/DoubleWingLayout'

  export default {
    components: {
      DoubleWingLayout
    },
    methods: {

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .double-wing-layout{
    height: 100%;
  }
</style>
