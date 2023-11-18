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
    var map = new google.maps.Map(document.getElementById('myMap'), 
      {
        center: {lat:39.95233, lng: -75.16379},
        scrollwheel: false,
        zoom: 10 
      }
    )
  
    fetchData()
      
    var isBeingDragged = false;
    google.maps.event.addListener(map, 'dragstart', function() {
      isBeingDragged = true;
    });

    google.maps.event.addListener(map, 'dragend', function() {
      isBeingDragged = false;
    });

    var markers = []
    
    google.maps.event.addListener(map, 'center_changed', function() {
      if(!isBeingDragged){
        setTimeout(function() {
          var bounds =  map.getBounds();

          //query the table to get marker data
          fetchData(bounds.getNorthEast(), bounds.getSouthWest())
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
      markers.push({"position": location, "title": title})
      marker.addListener('click', function () {
        map.panTo(marker.getPosition());
        smoothZoom(map, 15, map.getZoom());
      }); 
    }

    function smoothZoom (map, max, cnt) {
      if (cnt >= max) {
          return;
      }
      else {
          // eslint-disable-next-line no-unused-vars
          var z = google.maps.event.addListener(map, 'zoom_changed', function(event){
              google.maps.event.removeListener(z);
              smoothZoom(map, max, cnt + 1);
          });
          setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
      }
    }  

    async function fetchData() {
      await fetch('http://localhost:8000/get_cafes')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        responseJSON.forEach(cafe => {
          var isPresent = false
          console.log("number of markers" + markers.length)
          markers.forEach(marker => {
            if(marker.position.lat == cafe.latitude && marker.position.lng == cafe.longitude){
              isPresent = true
            }
          })
          if(!isPresent){
            console.log('adding new marker: ' + cafe.shop_name)
            addMarker({lat: cafe.latitude, lng: cafe.longitude})
          }
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