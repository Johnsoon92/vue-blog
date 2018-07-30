<template>
  <div class="page-wrapper">
    {{message}}
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        message: 'This is the Home Page of front'
      }
    },
  }
</script>
