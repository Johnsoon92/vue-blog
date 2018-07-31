<template>
  <span :style="iconStyle" class="icon-triangle"></span>
</template>

<script type="text/javascript">
  export default {
    name: 'IconTriangle',
    props: {
      width: {
        type: String,
        default: '12px',
      },
      weight: {
        type: Number,
        default: 2,
      },
      orient: {
        type: String,
        default: 'down',
      },
    },
    data() {
      return {
        orientMap: {
          'up': -135,
          'right': -45,
          'down': 45,
          'left': 135,
        },
      }
    },
    computed: {
      iconStyle() {
        return {
          display: 'inline-block',
          'border-bottom': `${this.weight}px solid`,
          'border-right': `${this.weight}px solid`,
          width: this.width,
          height: this.width,
          transform: `rotate(${this.orientMap[this.orient]}deg)`
        }
      }
    },
  }
</script>
<style lang="scss">
  .icon-triangle {
  }
</style>
