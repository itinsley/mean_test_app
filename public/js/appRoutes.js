// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // Restaurants page that will use the RestaurantController
        .when('/restaurants', {
            templateUrl: 'views/restaurant.html',
            controller: 'RestaurantController'
        });

    $locationProvider.html5Mode(true);

}]);