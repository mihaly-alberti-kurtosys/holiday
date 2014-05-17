'use strict';

describe('Controller: WeekselectorControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('holidayApp'));

  var WeekselectorControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeekselectorControllerCtrl = $controller('WeekselectorControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
