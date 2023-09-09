<template>
    <div class="navbar">
        <NavbarButton title="About Me"/>
        <NavbarButton title="Resume"/>
        <NavbarButton title="Resume"/>
        <NavbarButton title="LinkedIn"/>
    </div>
</template>

<script>
import NavbarButton from '../NavbarButton/NavbarButton.vue'

export default {
    name: 'Navbar',
    components: {
        NavbarButton
    }
}
</script>

<style lang="scss" scoped>
  @import './NavigationBar';
</style>