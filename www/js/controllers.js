angular.module('starter.controllers', [])

.controller('MapCtrl', ['$scope', function($scope) {

  /**
  * Once state loaded, get put map on scope.
  */
  // $scope.$on("$stateChangeSuccess", function() {
  //   alert('hej');
  // });

  $scope.map = {
    defaults: {
        //haritayı alacağımız sunucu
        //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        //maxZoom: 18,
        //zoomControlPosition: 'bottomleft'
    },
    //haritanın merkezi
    center: {
        lat: 40,
        lng: 29,
        zoom: 12
    }
  };

    // angular.extend($scope, {
    //     defaults: {
    //         scrollWheelZoom: false
    //     }
    // });

  // angular.extend($scope, {
  //     defaults: {
  //         scrollWheelZoom: false,
  //         attributionControl: true,
  //         tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  //         tileLayerOptions: {
  //             attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         },
  //     }
  // });  
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
