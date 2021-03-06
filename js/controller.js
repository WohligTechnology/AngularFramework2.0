var lat = 0;
var long = 0;
var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'restservicemod', 'ngRoute', 'infinite-scroll', 'ngAnimate', 'toaster', 'wu.masonry','iso.directives']);

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
    $scope.pageready = "true";

     angular.element(document).ready(function () {
         $scope.pageready = "false";
         
    });
    
        $scope.list = [];
        for (var i = 0; i < 6; i++) {
            $timeout(function () {
                $scope.list.push({
                    title: "item"
                });
            }, 500 * i);
        };

        $scope.myPagingFunction = function () {
            $timeout(function () {
                $scope.list.push({
                    title: "item"
                });
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
            console.log("in login");
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


        $scope.signupfunc = function (login) {
            console.log("toaster");
            toaster.pop("error", "Signup Error", "Already Exist. Choose Another Email Address", 5000);
            toaster.pop("success", "Welcome", "Registered successfully", 5000);
        }

    });
phonecatControllers.controller('logout',
    function ($scope, TemplateService, NavigationService, RestService, $location) {

    });
phonecatControllers.controller('contactus',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/contactus.html";
        $scope.navigation = NavigationService.getnav();
});

phonecatControllers.controller('listing',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/listing.html";
        $scope.navigation = NavigationService.getnav();

        $scope.changeorderto = function (neworder) {
            $scope.order = neworder;
        };

        $scope.xList = [
            {
                name: 'a',
                number: '1',
                date: '1360413309421',
                class: 'purple'
            }
      , {
                name: 'b',
                number: '5',
                date: '1360213309421',
                class: 'orange'
            }
      , {
                name: 'c',
                number: '10',
                date: '1360113309421',
                class: 'blue'
            }
      , {
                name: 'd',
                number: '2',
                date: '1360113309421',
                class: 'green'
            }
      , {
                name: 'e',
                number: '6',
                date: '1350613309421',
                class: 'green'
            }
      , {
                name: 'f',
                number: '21',
                date: '1350613309421',
                class: 'orange'
            }
      , {
                name: 'g',
                number: '3',
                date: '1340613309421',
                class: 'blue'
            }
      , {
                name: 'h',
                number: '7',
                date: '1330613309001',
                class: 'purple'
            }
      , {
                name: 'i',
                number: '22',
                date: '1360412309421',
                class: 'blue'
            }
      ]
        $scope.pageClass = "page-signup";

        $scope.items = [
            {
                "id": 0,
                "picture": "http://placehold.it/32x32",
                "age": 31,
                "name": "Mathews Goff"
    },
            {
                "id": 1,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": "Collins Alston"
    },
            {
                "id": 2,
                "picture": "http://placehold.it/32x32",
                "age": 27,
                "name": "Jasmine Rollins"
    },
            {
                "id": 3,
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "name": "Julie Jefferson"
    },
            {
                "id": 4,
                "picture": "http://placehold.it/32x32",
                "age": 23,
                "name": "Wilder King"
    },
            {
                "id": 5,
                "picture": "http://placehold.it/32x32",
                "age": 23,
                "name": "Stanley Moore"
    },
            {
                "id": 6,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": "Reynolds Bishop"
    },
            {
                "id": 7,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "name": "Bryant Flowers"
    },
            {
                "id": 8,
                "picture": "http://placehold.it/32x32",
                "age": 38,
                "name": "Jenifer Martinez"
    },
            {
                "id": 9,
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "name": "Mcguire Pittman"
    },
            {
                "id": 10,
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "name": "Valdez Hyde"
    },
            {
                "id": 11,
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "name": "Marla Mayo"
    },
            {
                "id": 12,
                "picture": "http://placehold.it/32x32",
                "age": 30,
                "name": "Brown Ortega"
    },
            {
                "id": 13,
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "name": "Jeannette William"
    },
            {
                "id": 14,
                "picture": "http://placehold.it/32x32",
                "age": 30,
                "name": "Bridges Ashley"
    },
            {
                "id": 15,
                "picture": "http://placehold.it/32x32",
                "age": 33,
                "name": "Latasha Hewitt"
    },
            {
                "id": 16,
                "picture": "http://placehold.it/32x32",
                "age": 35,
                "name": "Alma Sawyer"
    },
            {
                "id": 17,
                "picture": "http://placehold.it/32x32",
                "age": 21,
                "name": "Liz Mcbride"
    },
            {
                "id": 18,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "name": "Mcintosh Chandler"
    },
            {
                "id": 19,
                "picture": "http://placehold.it/32x32",
                "age": 20,
                "name": "Alford Hartman"
    },
            {
                "id": 20,
                "picture": "http://placehold.it/32x32",
                "age": 29,
                "name": "Tiffany Green"
    },
            {
                "id": 21,
                "picture": "http://placehold.it/32x32",
                "age": 38,
                "name": "Stafford Riggs"
    },
            {
                "id": 22,
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "name": "Elinor Chambers"
    },
            {
                "id": 23,
                "picture": "http://placehold.it/32x32",
                "age": 27,
                "name": "Carly Howard"
    },
            {
                "id": 24,
                "picture": "http://placehold.it/32x32",
                "age": 27,
                "name": "Rosalind Sanchez"
    },
            {
                "id": 25,
                "picture": "http://placehold.it/32x32",
                "age": 28,
                "name": "Jaclyn Shelton"
    },
            {
                "id": 26,
                "picture": "http://placehold.it/32x32",
                "age": 25,
                "name": "Hughes Phelps"
    },
            {
                "id": 27,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": "Rosetta Barrett"
    },
            {
                "id": 28,
                "picture": "http://placehold.it/32x32",
                "age": 29,
                "name": "Jarvis Wong"
    },
            {
                "id": 29,
                "picture": "http://placehold.it/32x32",
                "age": 23,
                "name": "Kerri Pennington"
    }
];
    });

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