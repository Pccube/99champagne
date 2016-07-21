angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


        .state('menu.hOME', {
               url: '/home',
               views: {
               'side-menu21': {
               templateUrl: 'templates/hOME.html',
               controller: 'hOMECtrl'
               }
               }
               })

        .state('menu.nEWS', {
               url: '/news',
               views: {
               'side-menu21': {
               templateUrl: 'templates/nEWS.html',
               controller: 'nEWSCtrl'
               }
               }
               })

        .state('menu.lECHAMPAGNE', {
               url: '/champagne',
               views: {
               'side-menu21': {
               templateUrl: 'templates/lECHAMPAGNE.html',
               controller: 'lECHAMPAGNECtrl'
               }
               }
               })

        .state('menu', {
               url: '/side-menu21',
               templateUrl: 'templates/menu.html',
               abstract:true
               })

        .state('menu.iLOCALI', {
               url: '/locali?id',
               cache: false,
               views: {
               'side-menu21': {
               templateUrl: 'templates/iLOCALI.html',
               controller: 'iLOCALICtrl'
               }
               }
               })

        .state('menu.mYCAVE', {
               url: '/cave',
               views: {
               'side-menu21': {
               templateUrl: 'templates/mYCAVE.html',
               controller: 'mYCAVECtrl'
               }
               }
               })

        .state('menu.lEMAISON', {
               url: '/maison',
               views: {
               'side-menu21': {
               templateUrl: 'templates/lEMAISON.html',
               controller: 'lEMAISONCtrl'
               }
               }
               })

        .state('menu.sETTINGS', {
               url: '/settings',
               views: {
               'side-menu21': {
               templateUrl: 'templates/sETTINGS.html',
               controller: 'sETTINGSCtrl'
               }
               }
               })

        .state('registrazione', {
               url: '/registrazione',
               templateUrl: 'templates/registrazione.html',
               controller: 'registrazioneCtrl'
               })

        .state('99Champagne', {
               url: '/99Champagne',
               templateUrl: 'templates/99Champagne.html',
               controller: '99ChampagneCtrl'
               })

        .state('login', {
               url: '/login',
               templateUrl: 'templates/login.html',
               controller: 'loginCtrl'
               })

        $urlRouterProvider.otherwise('99Champagne')



});
