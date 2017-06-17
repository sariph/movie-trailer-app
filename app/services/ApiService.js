/**
 * Created by avipokhrel on 6/7/17.
 */
'use strict';

angular.module('myApp')
    .factory('ApiService', ApiService);

function ApiService($http) {
    var as = {};
    var serviceUrl = 'https://api.nasa.gov/planetary/apod?api_key=ebf55b9e-658d-476f-abb2-14fc0354d5df';

    //handles the get operation for a particular url nad params
    as.getNasaData = function () {

        var getRequest = {
            method: 'GET',
            url: serviceUrl
           // params: params
        };

        var promise = $http(getRequest);

        return promise;
    };

    return as;
}