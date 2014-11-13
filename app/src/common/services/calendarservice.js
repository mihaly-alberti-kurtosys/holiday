'use strict';

angular.module('holidayApp')
	.service('Calendarservice', function Calendarservice() {

		Calendarservice = {};
		Calendarservice.calendar = [];

		// standard time attributes
		var now = new Date();
		var year = now.getYear();
		if (year < 1000) {
			year+=1900;
		}
		var month = now.getMonth();
		var monthName = getMonthName(month);
		var date = now.getDate();
		now = null;

		// create instance of first day of month, and extract the day on which it occurs
		var firstDayInstance = new Date(year, month, 1);
		var firstDay = firstDayInstance.getDay();
		firstDayInstance = null;

		// number of days in current month
		var days = getDays(month, year);

		// call function to draw calendar
		drawCal(firstDay + 1, days, date, month, year);


		function leapYear(year) {
			if (year % 4 == 0) {
				return true
			}

		}

		function getDays(month, year) {
			// create array to hold number of days in each month
			var ar = new Array(12);
			ar[0] = 31; // January
			ar[1] = (leapYear(year)) ? 29 : 28; // February
			ar[2] = 31; // March
			ar[3] = 30; // April
			ar[4] = 31; // May
			ar[5] = 30; // June
			ar[6] = 31; // July
			ar[7] = 31; // August
			ar[8] = 30; // September
			ar[9] = 31; // October
			ar[10] = 30; // November
			ar[11] = 31; // December

			// return number of days in the specified month (parameter)
			return ar[month]
		}

		function getMonthName(month) {
			// create array to hold name of each month
			var ar = new Array(12);
			ar[0] = "January";
			ar[1] = "February";
			ar[2] = "March";
			ar[3] = "April";
			ar[4] = "May";
			ar[5] = "June";
			ar[6] = "July";
			ar[7] = "August";
			ar[8] = "September";
			ar[9] = "October";
			ar[10] = "November";
			ar[11] = "December";

			// return name of specified month (parameter)
			return ar[month]
		}




		function drawCal(firstDay, lastDate, date, monthName, year) {

		// declaration and initialization of two variables to help with tables
			var digit = 1;
			var curCell = 1;

			for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {

				for (var col = 1; col <= 7; ++col) {

					if (digit > lastDate){
						break;
					}

					Calendarservice.calendar.push({
						'year': year,
						'month': month,
						'day': digit
					});

					digit++;
				}
			}
		}

		Calendarservice.getCalendar = function() {
			return Calendarservice.calendar
		};

		return Calendarservice;

});
