<template>
    <div class="navbar">
        <NavbarButton title="Home" link="/"/>
        <NavbarButton title="About Me" link="about"/>
        <NavbarButton title="Resume" link="resume"/>
        <NavbarButton title="Cafe Tracker" link="cafe-tracker"/>
        <NavbarButton title="LinkedIn" external link="https://www.linkedin.com/in/aaroncscofield/"/>
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