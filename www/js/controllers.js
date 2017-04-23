"use strict";
angular.module('starter.controllers', [])

.controller('MapCtrl', ['$scope', 'geolocation', 'Places', function($scope, geolocation, Places) {

  //Create a map using angular ui-leaflet directive - https://github.com/angular-ui/ui-leaflet
  $scope.map = {
    defaults: {
      //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      //maxZoom: 18,
      zoomControlPosition: 'bottomleft'
    },
    centerusa: {
      lat: 37,
      lng: -110,
      zoom: 4
    },
    markers: {},
    icons: {
      default_icon: {},
      Hotel: {
        iconUrl: 'img/ion-home.png',
        shadowUrl: 'img/ion-home.png',
        iconSize:     [16, 16], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [8, 16], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
      }
    }
  };

  //Center map to your location and zoom in and show your location
  geolocation.getLocation().then(function(data){
    $scope.map.centerusa.lat = data.coords.latitude;
    $scope.map.centerusa.lng = data.coords.longitude;
    $scope.map.centerusa.zoom = 5;//12;
    console.log('getLocation():'+JSON.stringify($scope.map.centerusa));

    $scope.map.markers.hereYouAreMarker = {
      lat: data.coords.latitude,
      lng: data.coords.longitude,
      message: "Here are you",
      focus: true,
      draggable: false
    };
  }), function(reason) {
    console.log('getLocation() failed:'+JSON.stringify(reason));
  };

  //Put all places on the map
  $scope.places = Places.all();
  //angular.forEach(obj, iterator)
  angular.forEach($scope.places, function(place, idx) {
    //console.log(place.id);
    let venueIcon = $scope.map.icons[place.venueTypes[0]];
    let coords = place.coords.split(', ');
    this[place.id] = {
      lat: parseFloat(coords[0]),
      lng: parseFloat(coords[1]),
      message: place.name,
      //focus: true,
      draggable: false,
      icon: venueIcon
    };
  }, $scope.map.markers);

}])

.controller('PlacesCtrl', ['$scope', 'Places', 'VenueTypes', function($scope, Places, VenueTypes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.places = Places.all();
  $scope.remove = function(place) {
    Places.remove(place);
  };
  $scope.venue2iconName = function(venueTypeKey){
    // console.log(venueTypeKey);
    return VenueTypes.getIconName(venueTypeKey);
  };
}])

.controller('PlaceDetailCtrl', ['$scope', '$stateParams', 'Places', 'VenueTypes', function($scope, $stateParams, Places, VenueTypes) {
  $scope.currPlace = Places.get($stateParams.placeId);
  $scope.getTitle = function(){
    return $scope.currPlace.venueTypes[0] + ': ' + $scope.currPlace.name;
  };
  $scope.venue2iconName = function(venueTypeKey){
    // console.log(venueTypeKey);
    return VenueTypes.getIconName(venueTypeKey);
  };
}])

.controller('SettingsCtrl', ['$scope', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);
