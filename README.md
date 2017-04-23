# angularattack2017-crawling 

# What is this?
This is an app with the tabs
* Map
* List of places
* Settings

The places on the map is divided into one or more of the categories
* Hotel: 'ion-home',
* Restaurant: 'ion-fork',
* PetShop: 'ion-ios-cart',
* Wellness: 'ion-happy',
* Park: 'ion-leaf',
* BeautySalon: 'ion-scissors',
* Hospital: 'ion-ios-medkit',
* Photographer: 'ion-camera',
* Travel: 'ion-briefcase',
* Pension: 'ion-archive',
* Contest: 'ion-trophy',
* School: 'ion-university',
* Event: 'ion-arrow-shrink'

Places are shown with an icon corresponding to its category.

Depending of what the time allows the todo list contains:
* Replace hardcoded places with places from various APIS
* Add central DB, so ratings and perhaps new places can be stored
* Add ratings to various pages
* Add "New Place" page
* Add favorites list and store it in local DB
* Manage favorites from settings page

# Installation IOS
* On IOS use GapCoder https://github.com/rasor/gapcoder-execution to clone this repo from. This might only be possible if you fork it.
* Or use Ionic 1 CLI:
`text
ionic start crawling https://github.com/Hackbit/angularattack2017-crawling
cd crawling
ionic platform add ios
ionic platform add android
`ionic serve

# Web Demo
http://crawling.2017.angularattack.io/ and https://angularattack2017-crawling.herokuapp.com/

# Credits
This app was based on a sample from [Ahmed Alparslan Özdemir](https://github.com/alparslanahmed/MekanBul).  Thank you.

Uses the [Angular Leaflet Directive](https://tombatossals.github.io/angular-leaflet-directive/) by [David Rubert](https://github.com/tombatossals).

Of course, it wouldn't exist without the fine folks from [Drifty](http://www.drifty.com) and the [Ionic Framework Team](http://ionicframework.com).
