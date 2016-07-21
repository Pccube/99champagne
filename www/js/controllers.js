angular.module('app.controllers', [])

.controller('hOMECtrl', function($scope) {

            })

.controller('nEWSCtrl', function($scope) {

            })

.controller('lECHAMPAGNECtrl', function($scope,$state, $cordovaGeolocation) {
})

.controller('iLOCALICtrl', function($scope,$state, $cordovaGeolocation, $stateParams) {
  function panTo(map, dest, delay) {
              var GOOGLE_PAN_DELAY = 30,
              /* the native Google Maps milliseconds */
                  cycles = delay / GOOGLE_PAN_DELAY,
                  interval = delay / cycles,
                  origin = map.getCenter(),
                  waypoints = [],
                  temp,
                  step,
                  lat,
                  lng;

              // compute the change in lat/long, and divide across N cycles
              lat = (dest.lat() - origin.lat()) / cycles;
              lng = (dest.lng() - origin.lng()) / cycles;

              // starting at origin, add N-1 intermediate waypoints that are equidistance apart
              temp = origin;
              for (var i = 0; i < cycles - 1; i++) {
                  step = cycles / ((cycles - i)*(cycles - i));
                  temp = new google.maps.LatLng(temp.lat() + (lat * step), temp.lng() + (lng * step));
                  waypoints.push(temp);
              }
              // make sure the last waypoint is the actual dest
              waypoints.push(dest);

              function pan() {
                  var waypoint;

                  if (waypoints.length === 0) return;

                  waypoint = waypoints.shift();

                  map.panTo(waypoint);

                  window.setTimeout(pan, interval);
              }

              pan();
          };

  $scope.champagne = function(){
    panTo($scope.map,new google.maps.LatLng(46.227638,2.213749),2000); // Pan map to that position
  }

  $scope.localize = function(){
      var options = {timeout: 10000, enableHighAccuracy: true};
      $cordovaGeolocation.getCurrentPosition(options).then(function(position){
          var latLngCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          $scope.marker.setMap(null);
          $scope.marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLngCenter
          });
          $scope.marker.setIcon('http://google-maps-icons.googlecode.com/files/sailboat-tourism.png');
          panTo($scope.map,latLngCenter,2000); // Pan map to that position
      });
  };

  $scope.$on('$ionicView.enter', function() {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      if(id == 1)
        var latLngCenter = new google.maps.LatLng(46.227638,2.213749)
      else
        var latLngCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        center: latLngCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: $scope.map,
      center: new google.maps.LatLng(46.227638,2.213749),
      radius: 200
    });
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

            for(var i=0, len=5; i < len; i++){
                var task = {
                    "latitude": position.coords.latitude+(i*0.005),
                    "longitude": position.coords.longitude+(i*0.005),
                    "description": "Ebuuu"
                };
                var latLng = new google.maps.LatLng(task.latitude, task.longitude);
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });
                if(i==0){
                  marker.setIcon('http://google-maps-icons.googlecode.com/files/sailboat-tourism.png');
                  $scope.marker = marker;
                }

            };

  }, function(error){
    console.log("Could not get location");
  });
  });
  var id = $stateParams.id;
    if(id!=1)
      $scope.localize();
  });
})

.controller('mYCAVECtrl', function($scope) {

            })

.controller('lEMAISONCtrl', function($scope) {

            })

.controller('sETTINGSCtrl', function($scope) {

            })

.controller('registrazioneCtrl', function($scope) {

            })

.controller('99ChampagneCtrl', function($scope) {

            })

.controller('loginCtrl', function($scope) {

});
