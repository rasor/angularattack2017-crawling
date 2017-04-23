"use strict";
angular.module('starter.services.places', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array
  // https://www.mockaroo.com/api/docs
  // http://www.generatedata.com/
  // Some fake testing data
  var places = [{
    id: 0,
    name: 'Hotel beautiful beach',
    face: 'img/ben.png',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    venueTypes: ['Hotel', 'Restaurant'],
    coords: {
        lat: 51.455041,
        lng: -0.9690884
    }
  }, {
    id: 1,
    name: 'Pink Park',
    face: 'img/max.png',
    rating: 5,
    venueTypes: ['Park'],
  }, {
    id: 2,
    name: 'Best Dogs',
    face: 'img/adam.jpg',
    rating: 4,
    venueTypes: ['PetShop'],
  }, {
    id: 3,
    name: 'Turner Trail',
    face: 'img/perry.png',
    rating: 5,
    venueTypes: ['Park'],
  }, {
    id: 4,
    name: 'Italian favorites',
    face: 'img/mike.png',
    rating: 3,
    venueTypes: ['Restaurant'],
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
