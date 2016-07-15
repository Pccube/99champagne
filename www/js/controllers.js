angular.module('app.controllers', [])

.controller('logoCtrl', function($scope,$state) {
            $scope.openMaison = function(){
            $state.go('side-menu21.maison');
            };
            $scope.openCouvee = function(){
            $state.go('side-menu21.couvee');
            };

            $scope.openNews = function(){
            $state.go('side-menu21.news');
            };

            $scope.openLocali = function(){
            $state.go('side-menu21.locali');
            };
            })

.controller('pageCtrl', function($scope,$state) {
            $scope.login = function(){
              udptransmit.initialize("viasky.dnsalias.com",41200);
              function UDPTransmitterInitializationSuccess(success) {
	                 console.log(success);
	            }

	             function UDPTransmitterInitializationError(error) {
	                 console.log(error);
	            }
              udptransmit.sendMessage("23542_SLU_0_0_A_0_4.2_0_0_20170101010101_2.352222_48.856614_0_0_0_\n");
              function UDPTransmissionSuccess(success) {
	                 console.log(success);
	            }

	            function UDPTransmissionError(error) {
	                 console.log(error);
	            }
              $state.go("side-menu21.logo");
            };
})

.controller('registratiCtrl', function($scope) {

})

.controller('backCtrl', function($scope) {

})

.controller('maisonCtrl', function($state,$scope,$http) {
            $http.defaults.headers.common.Authorization = 'pccube admin';
            $http({
                  method: 'GET',
                  url: 'http://87.241.28.229:39080/99champagne/api/v1/content/462',
                  headers: {'Accept':'application/json'}
                  }).then(function successCallback(response) {
                          $scope.data = response.data;
                          $scope.indirizzo = response.data.field_indirizzo.und[0].value;
                          $scope.descr = response.data.field_storia_e_stile.und[0].value;
                          });
            })

.controller('couveeCtrl', function($state,$scope,$http) {
            $http.defaults.headers.common.Authorization = 'pccube admin';
            $http({
                  method: 'GET',
                  url: 'http://87.241.28.229:39080/99champagne/api/v1/content/867',
                  headers: {'Accept':'application/json'}
                  }).then(function successCallback(response) {
                          $scope.data = response.data;
                          $scope.degustazione = response.data.field_degustazione.und[0].value;
                          });
            })

.controller('localiCtrl', function($state,$scope,$http) {
            $http.defaults.headers.common.Authorization = 'pccube admin';
            $http({
                  method: 'GET',
                  url: 'http://87.241.28.229:39080/99champagne/api/v1/content/882',
                  headers: {'Accept':'application/json'}
                  }).then(function successCallback(response) {
                          $scope.title= response.data.title;
                          $scope.facebook = response.data.field_fb_link.und[0].value;
                          $scope.indirizzo = response.data.field_indirizzo_locale.und[0].value;


                          });
            })

.controller('newsCtrl', function($state,$scope,$http) {
            $http.defaults.headers.common.Authorization = 'pccube admin';
            $http({
                  method: 'GET',
                  url: 'http://87.241.28.229:39080/99champagne/api/v1/content/973',
                  headers: {'Accept':'application/json'}
                  }).then(function successCallback(response) {
                          $scope.data = response.data;
                          $scope.testo = response.data.body.und[0].value;
                          });
            });
