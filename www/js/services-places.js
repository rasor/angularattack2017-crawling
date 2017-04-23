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
    rating: 5,
    venueTypes: ['Park'],
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
