'use strict';

angular.module('holidayApp')
	.controller('CalendarControllerCtrl', function ($scope, Calendarservice) {

		$scope.calendar = Calendarservice.getCalendar();
	});
