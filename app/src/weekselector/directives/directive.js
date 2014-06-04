'use strict';

angular.module('holidayApp')
  .directive('week', function () {
    return {
      scope: true,
      templateUrl: '/src/weekselector/views/weekselector.html',
      controller: 'WeekselectorControllerCtrl',
      restrict: 'E', // A, C
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });