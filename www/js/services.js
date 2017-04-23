"use strict";
angular.module('starter.services', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array
  // https://www.mockaroo.com/api/docs
  // http://www.generatedata.com/
  // venueTypes (for generatedata): ['Hotel']|['Restaurant']|['PetShop']|['Wellness']|['Park']
  // map venueTypes to ionic images - http://ionicons.com/1.5.2/cheatsheet.html
  var venueTypes = [{
    Hotel: 'ion-home'
  },{
    Restaurant: 'ion-fork'
  },{
    PetShop: 'ion-ios-cart'
  },{
    Wellness: 'ion-happy'
  },{
    Park: 'ion-leaf'
  },{
    Beautysalon: 'ion-scissors'
  },{
    Hospital: 'ion-ios-medkit'
  },{
    Photographer: 'ion-camera'
  },{
    Travel: 'ion-briefcase'
  },{
    Pension: 'ion-archive'
  },{
    Contest: 'ion-trophy'
  },{
    School: 'ion-university'
  },{
    Event: 'ion-arrow-shrink'
  }];

  var venueCustomers = [{
    Dogs: 'For dogs'
  },{
    Humans: 'Dogs allowed'
  }]

  // Some fake testing data
  var places = [{
    id: 0,
    name: 'Ben Sparrow',
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
    face: 'img/max.png',
    rating: 5,
    venueTypes: ['Park'],
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/adam.jpg',
    rating: 4,
    venueTypes: ['PetShop'],
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/perry.png',
    rating: 5,
    venueTypes: ['Park'],
  }, {
    id: 4,
    name: 'Mike Harrington',
    face: 'img/mike.png',
    rating: 3,
    venueTypes: ['Restarant'],
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
