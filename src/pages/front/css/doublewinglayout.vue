<template>
  <DoubleWingLayout max-width="1024px">
    <div slot="middle" style="background-color:#c3d1de;text-align:center;">
      middle
    </div>
    <div slot="left" style="background-color:#6ac580;text-align:center;">
      left
    </div>
    <div slot="right" style="background-color:#41474c;color:#fff;text-align:center;">
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
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .double-wing-layout{
    height: 100%;
  }
</style>
