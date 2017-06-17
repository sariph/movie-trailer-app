/**
 * Created by avipokhrel on 6/7/17.
 */
'use strict';

angular.module('myApp')

.controller('NasaCtrl', function ($scope, $log, ApiService) {
    $scope.name = 'James Badal';


    var promise = ApiService.getNasaData();

    promise.then(function (response) {
        $scope.nasaData = response.data;
    }, function (reason) {
        $log.error("Error retrieving service types.." + reason);
    });

});