<template>
  <div class="double-wing-layout">
    <div :style="containerStyle">
      <div :style="middleStyle">
        <slot name="middle"></slot>
      </div>
      <div :style="leftStyle">
        <slot name="left"></slot>
      </div>
      <div :style="rightStyle">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'DoubleWingLayout',
    props: {
      leftWidth: {
        type: String,
        default: () => '200px'
      },
      rightWidth: {
        type: String,
        default: () => '200px'
      },
    },
    computed: {
      containerStyle() {
        return {
          overflow: 'hidden',
          padding: `0 ${this.leftWidth}`,
          height: '100%',
        }
      },
      middleStyle() {
        return {
          float: 'left',
          width: '100%',
          height: '100%',
        }
      },
      leftStyle() {
        return {
          float: 'left',
          position: 'relative',
          left: `-${this.leftWidth}`,
          'margin-left': '-100%',
          width: this.leftWidth,
          height: '100%',
        }
      },
      rightStyle() {
        return {
          float: 'left',
          position: 'relative',
          right: `-${this.rightWidth}`,
          'margin-left': `-${this.rightWidth}`,
          width: this.rightWidth,
          height: '100%',
        }
      },
    },
    methods: {

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .double-wing-layout{
  }
</style>
