
var lat = 0;
var long = 0;
var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'restservicemod', 'ngRoute', 'infinite-scroll', 'ngAnimate', 'toaster']);

phonecatControllers.controller('home',
    function ($scope, TemplateService, NavigationService, RestService, $filter, $location, $timeout, toaster) {

        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/home.html";
        $scope.navigation = NavigationService.getnav();
        $scope.coords = {};
        $scope.showw = false;
        $scope.pageClass = "page-home";
    
        $scope.list = [];
		for (var i = 0; i < 6; i++) {
			$timeout(function () {
				$scope.list.push({ title : "item" });
			}, 500 * i);
		};	
    
        $scope.myPagingFunction = function (){
			$timeout(function () {
				$scope.list.push({ title : "item" });
			}, 500 * i);
        }

        function showPosition2(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            console.log("Positions:.........");
            console.log(position.coords);
            $scope.coords = position.coords;
            lat = position.coords.latitude;
            long = position.coords.longitude;
            $scope.showw = true;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition2, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }


    });

phonecatControllers.controller('myprofile',
    function ($scope, TemplateService, NavigationService, RestService, $location, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My Profile");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/myprofile.html";
        $scope.navigation = NavigationService.getnav();
    });
phonecatControllers.controller('login',
    function ($scope, TemplateService, NavigationService, RestService, $location, toaster) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/login.html";
        $scope.navigation = NavigationService.getnav();
        $scope.pageClass = "page-login";
    
        $scope.loginfunc = function (login) {
            toaster.pop("error", "Login Error", "Invalid username or password", 5000);
            toaster.pop("success", "Welcome", "Registered successfully", 5000);
        }

    });
phonecatControllers.controller('signup',
    function ($scope, TemplateService, NavigationService, RestService, $location, toaster) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/signup.html";
        $scope.navigation = NavigationService.getnav();
        $scope.pageClass = "page-signup";
    
        
        $scope.signupfunc = function (login){
            toaster.pop("error", "Signup Error", "Already Exist. Choose Another Email Address", 5000);
            toaster.pop("success", "Welcome", "Registered successfully", 5000);
        }
        
    });
phonecatControllers.controller('logout',
    function ($scope, TemplateService, NavigationService, RestService, $location) {

    });
phonecatControllers.controller('myaccount', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/myaccount.html";
        $scope.navigation = NavigationService.getnav();
}]);
phonecatControllers.controller('forgot',
    function ($scope, TemplateService, NavigationService, RestService) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/forgot.html";
        $scope.navigation = NavigationService.getnav();

    });

phonecatControllers.controller('headerctrl',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;

//        $scope.imagepath = imagepath;
  });