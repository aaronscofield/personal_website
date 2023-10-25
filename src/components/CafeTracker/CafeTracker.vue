<template>
  <div class="hello">
    <div id="myMap"></div>
  </div>
</template>

<script>
const google=window.google
export default {
  name: 'hello',
  mounted: function() {
    this.map = new google.maps.Map(document.getElementById('myMap'), {
    center: {lat:39.95233, lng: -75.16379},
    scrollwheel: false,
    zoom: 10
  })
}

}
</script>
<style scoped>
    #myMap {
    height:400px;
    width: 100%;
   }
</style>