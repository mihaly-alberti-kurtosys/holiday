'use strict';

angular.module('holidayApp')
  .directive('userlist/directive', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the userlist/directive directive');
      }
    };
  });
