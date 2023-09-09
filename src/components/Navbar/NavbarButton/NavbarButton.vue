<template>
    <div class = "button">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'NavbarButton',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
  @import './NavbarButton';
</style>