angular.module('mileage', [
    'ngRoute'
])

// configure the routes
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/add', {
            templateUrl: '/templates/add.html'
        })
        .when('/chart', {
            templateUrl: '/templates/chart.html'
        })
        .when('/', {
            templateUrl: '/templates/index.html',
            controller: 'IndexCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);