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
        }).when('/login', {
            templateUrl: 'views/template.html',
            controller: 'login'
        }).when('/signup', {
            templateUrl: 'views/template.html',
            controller: 'signup'
        }).
        otherwise({
            redirectTo: '/home'
        });
       
  }]);
