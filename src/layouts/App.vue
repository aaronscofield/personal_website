<template>
  <Header msg="Aaron Scofield"/>
  <NavigationBar/>
</template>

<script>
import Header from '../components/Header/Header.vue'
import NavigationBar from '../components/Navbar/Bar/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavigationBar
  }
}
</script>

<style lang="scss">
  @import './App';
</style>