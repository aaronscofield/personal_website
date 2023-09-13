<template>
    <div class="header">
      <Header msg="Aaron Scofield"/>
      <NavigationBar/>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <Footer/>
</template>

<script>
import Header from '../components/Header/Header.vue'
import NavigationBar from '../components/Navbar/Bar/NavigationBar.vue'
import Footer from '../components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavigationBar,
    Footer,
  }
}
</script>

<style lang="scss">
  @import './App';
</style>