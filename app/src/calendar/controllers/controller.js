'use strict';

angular.module('holidayApp')
  .controller('CalendarControllerCtrl', function ($scope) {
    $scope.days = [];

    for (var i = 1; i <= 31; i++) {
    	$scope.days.push(i);
    };
  });
