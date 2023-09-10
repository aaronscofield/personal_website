<template>
    <div v-if="!external" class = "button">
        <router-link :to="link">{{ title }}</router-link>
    </div>
    <div v-if="external" class = "button">
        <a :href="link">{{ title }}</a>
    </div>
</template>

<script>
export default {
    name: 'NavbarButton',
    props: {
        title: String,
        link: String,
        external: Boolean
    }
}
</script>

<style lang="scss" scoped>
  @import './NavbarButton';
</style>