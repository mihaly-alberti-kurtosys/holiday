'use strict';

describe('Controller: CalendarControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('holidayApp'));

  var CalendarControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalendarControllerCtrl = $controller('CalendarControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
