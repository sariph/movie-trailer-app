/**
 * Created by avipokhrel on 6/7/17.
 */
'use strict';
/**
 * Created by avipokhrel on 11/19/16.
 */
angular.module('myApp')
    .directive('youtube', function () {
        return {
            restrict: 'E',
            scope: {
                src: '='
            },
            templateUrl: 'directive/youtube.html'
        };
    });