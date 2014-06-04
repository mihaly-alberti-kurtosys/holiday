'use strict';

angular.module('holidayApp')
  .directive('requests', function () {
    return {
      templateUrl: '/src/requests/views/requests.html',
      restrict: 'E',
      controller: 'RequestsControllerCtrl',
      scope: true,
      link: function postLink(scope, element, attrs) {
      

      }
    };
  });
