'use strict';

angular.module('holidayApp')
  .directive('calendar', function () {
    return {
      scope: true,
      templateUrl: '/src/calendar/views/calendar.html',
      controller: 'CalendarControllerCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
