'use strict';

angular.module('myApp')

    .controller('View2Ctrl', function ($scope, ApiService) {
        $scope.weatherData = {
            weather:
            {
                name: 'Joseph',
                main: 'Raining',
                description: 'light Rain in the evening..'
            },
            someData: 'someData',
            length: 2
        };


    });