"use strict";
angular.module('starter.services.masterdata', [])

.factory('VenueTypes', function() {
  // venueTypes (for generatedata): 
  //['Hotel']|['Restaurant']|['Shop']|['Wellness']|['Park']|['Beautysalon']|['Hospital']|['Photographer']|['Travel']|['Pension']|['Contest']|['School']|['Event']
  // map venueTypes to ionic images - http://ionicons.com/1.5.2/cheatsheet.html
  var venueTypes = {
    Hotel: 'ion-home',
    Restaurant: 'ion-fork',
    PetShop: 'ion-ios-cart',
    Wellness: 'ion-happy',
    Park: 'ion-leaf',
    BeautySalon: 'ion-scissors',
    Hospital: 'ion-ios-medkit',
    Photographer: 'ion-camera',
    Travel: 'ion-briefcase',
    Pension: 'ion-archive',
    Contest: 'ion-trophy',
    School: 'ion-university',
    Event: 'ion-arrow-shrink'
  };

  var venueCustomers = {
    Dogs: 'For dogs',
    Humans: 'Dogs allowed'
  };

  return {
    all: function() {
      return venueTypes;
    },
    getIconName: function(venueTypesKey) {
      return venueTypes[venueTypesKey];
    }    
  };
});
