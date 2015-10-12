angular.module('RestaurantService', []).factory('Restaurant', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/restaurants');
        },

        // POST
        create : function(restaurantData) {
            return $http.post('/api/restaurants', restaurantData);
        },

        // DELETE
        delete : function(id) {
            return $http.delete('/api/restaurants/' + id);
        }
    }

}]);