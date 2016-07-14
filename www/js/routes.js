angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
        
        
      .state('side-menu21.logo', {
    url: '/page1',
    views: {
        'side-menu21': {
        	templateUrl: 'templates/home.html',
            controller: 'logoCtrl'
        }
      }
  })
        
    
  
  .state('side-menu21.locali',
  {
	  url: '/page7',
	  views:
	  {
		  'side-menu21':
		      {
		    	  templateUrl: 'templates/locali.html',
		          controller: 'localiCtrl'
		      }
      }
  })
  
   .state('side-menu21.news', {
    url: '/pageNews',
    views: {
        'side-menu21': {
        	templateUrl: 'templates/news.html',
            controller: 'newsCtrl'
        }
      }
  })
  
      .state('side-menu21.maison', {
    url: '/page6',
    views: {
        'side-menu21': {
        	templateUrl: 'templates/maison.html',
            controller: 'maisonCtrl'
        }
      }
  })
  
    .state('side-menu21.couvee', {
    url: '/couveePage',
    views: {
        'side-menu21': {
        	templateUrl: 'templates/couvee.html',
            controller: 'couveeCtrl'
        }
      }
  })
    
        .state('registrati', {
               url: '/reg',
               
               templateUrl: 'templates/registrati.html',
               controller: 'registratiCtrl'
               
               })
      
        .state('backPage', {
               url: '/reg',
               
               templateUrl: 'templates/loginScreen.html',
               controller: 'backCtrl'
               
               })

  .state('side-menu21', {
    url: '/side-menu21',
    templateUrl: 'templates/side-menu21.html',
    abstract:true
  })

  .state('page', {
    url: '/page4',
    templateUrl: 'templates/loginScreen.html',
    controller: 'pageCtrl'
  })

  .state('maison', {
    url: '/page5',
    templateUrl: 'templates/maison.html',
    controller: 'maisonCtrl'
  })

$urlRouterProvider.otherwise('/page4')
        

});

