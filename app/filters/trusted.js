/**
 * Created by avipokhrel on 6/7/17.
 */
'use strict';
/**
 * Created by avipokhrel on 11/19/16.
 */
angular.module('myApp')
    .filter('trusted', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    });