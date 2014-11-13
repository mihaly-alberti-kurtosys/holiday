'use strict';

angular.module('holidayApp')
	.filter('common', function () {
		return function (input) {
			return 'common filter: ' + input;
		};
	})
	.filter('monthName', [function() {
		return function (monthNumber) { //1 = January
			var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
			return monthNames[monthNumber];
		}
	}]);
