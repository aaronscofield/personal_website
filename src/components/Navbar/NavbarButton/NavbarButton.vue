<template>
    <div class = "button">
        <a :href=link>{{ title }}</a>
    </div>
</template>

<script>
export default {
    name: 'NavbarButton',
    props: {
        title: String,
        link: String
    }
}
</script>

<style lang="scss" scoped>
  @import './NavbarButton';
</style>