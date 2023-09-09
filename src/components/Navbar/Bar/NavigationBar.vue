<template>
    <div class="navbar">
        <NavbarButton title="About Me"/>
        <NavbarButton title="Resume"/>
        <NavbarButton title="Resume"/>
        <NavbarButton title="LinkedIn" link="https://www.linkedin.com/in/aaroncscofield/"/>
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