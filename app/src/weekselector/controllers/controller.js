'use strict';

angular.module('holidayApp')
  .controller('WeekselectorControllerCtrl', function ($scope) {
    $scope.days = [];

    for (var i = 1; i <= 7; i++) {
    	$scope.days.push(i);
    };
  });
