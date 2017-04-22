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
  });

}])

.controller('ChatsCtrl', ['$scope', 'Chats', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])

.controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}])

.controller('AccountCtrl', ['$scope', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);
