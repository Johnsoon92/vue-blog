<template>
  <span :style="iconStyle"></span>
</template>

<script type="text/javascript">
  export default {
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
    display: inline-block;
    border-bottom: 1px solid;
    border-right: 1px solid;
    width: 12px;
    height: 12px;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
