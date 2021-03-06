var app = angular.module("umovie-app", [
    "ngRoute",
    "ngCookies",
    "ui.materialize"
]);

app.run(["$rootScope",function($rootScope) {
    $rootScope.alreadyLoadedGravatar = false;
}]);

app.config([
    "$routeProvider",
    "$httpProvider",
    "$locationProvider",
    function ($routeProvider, $httpProvider, $locationProvider) {
        $httpProvider.interceptors.push('interceptor');
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home', {
                templateUrl: "./views/home.html",
                controller: "HomeCtrl"
            })
            .when('/watchlists/:id?', {
                templateUrl: "./views/watchlists.html",
                controller: "WatchListsCtrl"
            })
            .when('/infofilm', {
                templateUrl: "./views/infofilm.html",
                controller: "InfofilmCtrl"
            })
            .when('/infofilm/:id', {
                templateUrl: "./views/infofilm.html",
                controller: "InfofilmCtrl"
            })
            .when('/tvshow/:id', {
                templateUrl: "./views/tvshow.html",
                controller: "TvShowCtrl"
            })
            .when('/actor/:id', {
                templateUrl: "./views/actor.html",
                controller: "ActorCtrl"
            })
            .when('/login', {
                templateUrl: "./views/login.html",
                controller: "LoginCtrl"
            })
            .when('/signup', {
                templateUrl: "./views/signup.html",
                controller: "LoginCtrl"
            })
            .when('/user/:uid', {
                templateUrl: "./views/user.html",
                controller: "UserCtrl"
            })
            .when('/searchresults', {
                templateUrl: "./views/searchresults.html",
                controller: "SearchResultsCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
]);
