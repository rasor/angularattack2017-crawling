"use strict";
angular.module('starter.services', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array
  // https://www.mockaroo.com/api/docs
  // http://www.generatedata.com/

  // Some fake testing data
  var places = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    venueTypes: ['Hotel', 'Restarant'],
    coords: {
        lat: 51.455041,
        lng: -0.9690884
    }
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
  }];

  return {
    all: function() {
      return places;
    },
    remove: function(place) {
      places.splice(places.indexOf(place), 1);
    },
    get: function(placeId) {
      for (var i = 0; i < places.length; i++) {
        if (places[i].id === parseInt(placeId)) {
          return places[i];
        }
      }
      return null;
    }
  };
});
