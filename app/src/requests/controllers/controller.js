'use strict';

angular.module('holidayApp')
  .controller('RequestsControllerCtrl', function ($scope, RequestsService) {
    $scope.requests = [
		{
			user: "user1",
			fromDate: "2014.05.05", 
			toDate: "2014.05.06", 
			approved: true,
			approvedBy: "yyy",
			reason: "homesick",
		},
		{
			user: "user2",
			fromDate: "2014.05.07", 
			toDate: "2014.05.08", 
			approved: true,
			approvedBy: "yyy",
			reason: "homesick",
		},
		{
			user: "user3",
			fromDate: "2014.10.06", 
			toDate: "2014.12.06", 
			approved: true,
			approvedBy: "yyy",
			reason: "homesick",
		}
	]
  });
