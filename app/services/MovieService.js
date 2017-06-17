/**
 * Created by avipokhrel on 6/16/17.
 */
'use strict';

angular.module('myApp')
    .factory('MovieService', ['$http', function ($http) {
        return {
            all: function () {
                return $http.get('/api/movie');
            },
            getbyId: function (id) {
                return $http.get('/api/movie/' + id);
            }
        }
    }]);
