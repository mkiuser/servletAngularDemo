/**
 * 
 */
angular.module('app', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/iluvdb/AccountHandler').
        then(function(response) {
            $scope.greeting = response.data;
            console.log(response.data);
        });
});