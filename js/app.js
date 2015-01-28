// JavaScript Document

var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice',
    'restservicemod'
]);

firstapp.config(['$routeProvider',

  function ($routeProvider,$routeParams) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        otherwise({
            redirectTo: '/home'
        });
       
  }]);
