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
    //https://angular-ui.github.io/ui-leaflet/#!/examples/customized-markers
    icons: {
      default_icon: {},
      Hotel: {
        iconUrl: 'img/Hotel.png',
        iconSize:     [16, 16], // size of the icon
        iconAnchor:   [8, 16], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
      },
      Restaurant: {iconUrl: 'img/Restaurant.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Shop: {iconUrl: 'img/Shop.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Wellness: {iconUrl: 'img/Wellness.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Park: {iconUrl: 'img/Park.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Beautysalon: {iconUrl: 'img/Beautysalon.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Hospital: {iconUrl: 'img/Hospital.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Photographer: {iconUrl: 'img/Photographer.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Travel: {iconUrl: 'img/Travel.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Pension: {iconUrl: 'img/Pension.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Contest: {iconUrl: 'img/Contest.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      School: {iconUrl: 'img/School.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] },
      Event: {iconUrl: 'img/Event.png',iconSize: [16, 16], iconAnchor: [8, 16],popupAnchor: [0, -16] }
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
