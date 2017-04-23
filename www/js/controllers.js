"use strict";
angular.module('starter.controllers', [])

.controller('MapCtrl', ['$scope', 'geolocation', function($scope, geolocation) {

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
    }
  };

  geolocation.getLocation().then(function(data){
    $scope.map.centerusa.lat = data.coords.latitude;
    $scope.map.centerusa.lng = data.coords.longitude;
    $scope.map.centerusa.zoom = 12;
    console.log('getLocation():'+JSON.stringify($scope.map.centerusa));
  }), function(reason) {
    console.log('getLocation() failed:'+JSON.stringify(reason));
  };

}])

.controller('PlacesCtrl', ['$scope', 'Places', function($scope, Places) {
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
  $scope.venue2iconName = function(venueTypeId){
    console.log(venueTypeId);
    return "ion-home";
  };
}])

.controller('PlaceDetailCtrl', ['$scope', '$stateParams', 'Places', function($scope, $stateParams, Places) {
  $scope.currPlace = Places.get($stateParams.placeId);
}])

.controller('SettingsCtrl', ['$scope', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);
