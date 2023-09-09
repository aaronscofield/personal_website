<template>
  <div class="header">
    <p>{{ msg }}</p>
    <p class="sub">DevOps Engineer | Philadelphia, PA</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  @import './Header';
</style>
