angular.module('mileage')
.controller('AddCtrl', ['$scope', function ($scope) {
    
    $scope.receipt = {};

    $scope.submit = function () {
        console.log($scope.receipt);
    };
}]);