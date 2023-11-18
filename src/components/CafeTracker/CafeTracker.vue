<template>
  <div class="hello">
    <div id="myMap"></div>
  </div>
</template>

<script>
const google=window.google
export default {
  name: 'hello',
  data() {
    return {
        map: null,
        markers: [],
      }
  },

  mounted: function() {
    var map = new google.maps.Map(document.getElementById('myMap'), {
    center: {lat:39.95233, lng: -75.16379},
    scrollwheel: false,
    zoom: 10
  })

  var isBeingDragged = false;
  google.maps.event.addListener(map, 'dragstart', function() {
    isBeingDragged = true;
  });

  google.maps.event.addListener(map, 'dragend', function() {
    isBeingDragged = false;
  });

  google.maps.event.addListener(map, 'center_changed', function() {
    if(!isBeingDragged){
      setTimeout(function() {
        var bounds =  map.getBounds();
        // eslint-disable-next-line no-unused-vars
        var ne = bounds.getNorthEast();
        // eslint-disable-next-line no-unused-vars
        var sw = bounds.getSouthWest();

        //query the table to get marker data
        fetchData()
      }, 500);
    }
  });

  function addMarker(location, title) {
    // eslint-disable-next-line no-unused-vars
    var marker = new google.maps.Marker({
      position: location,
      title: title,
      map: map
    });
  }

  async function fetchData() {
    await fetch('http://localhost:8000/get_cafes', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      // do stuff with responseJSON here...
      responseJSON.forEach(cafe => {
        //var isPresent = false
//
        //this.markers.forEach(marker => {
        //  if(marker.position.lat == cafe.latitude && marker.position.lng == cafe.longitude){
        //    isPresent = true
        //  }
        //})
        //if(!isPresent){
        //  console.log('adding new marker' + cafe.shop_name)
        //  addMarker({lat: cafe.latitude, lng: cafe.longitude})
        //}
        console.log('adding new marker' + cafe.shop_name)
        addMarker({lat: cafe.latitude, lng: cafe.longitude}, cafe.shop_name)
       })
    })
    .catch(err => {
      console.error(err);
    });
	}
}

}
</script>
<style scoped>
    #myMap {
    height:400px;
    width: 100%;
   }
</style>