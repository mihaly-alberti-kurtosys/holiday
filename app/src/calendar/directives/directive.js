'use strict';

angular.module('holidayApp')
  .directive('calendar/directive', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the calendar/directive directive');
      }
    };
  });
