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
      maxWidth: {
        type: String,
        default: () => '100%'
      },
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
          minWidth: 2 * parseInt(this.leftWidth, 10) + parseInt(this.rightWidth, 10) + 'px',
          height: '100%',
          margin: '0 auto',
          maxWidth: this.maxWidth,
        }
      },
      middleStyle() {
        return {
          float: 'left',
          width: '100%',
          minWidth: this.leftWidth,
          height: '100%',
        }
      },
      leftStyle() {
        return {
          float: 'left',
          position: 'relative',
          left: `-${this.leftWidth}`,
          marginLeft: '-100%',
          width: this.leftWidth,
          height: '100%',
        }
      },
      rightStyle() {
        return {
          float: 'left',
          position: 'relative',
          right: `-${this.rightWidth}`,
          marginLeft: `-${this.rightWidth}`,
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
