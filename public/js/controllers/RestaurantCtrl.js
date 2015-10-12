var restaurantController = angular.module('RestaurantCtrl', []);

restaurantController.controller('RestaurantController', function($scope, $http) {

    $http.get('api/restaurants').success(function(data) {
      $scope.restaurants = data;
    });

    $scope.tagline = 'Nothing beats a pocket protector!';

});