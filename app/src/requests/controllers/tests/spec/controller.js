'use strict';

describe('Controller: RequestsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('holidayApp'));

  var RequestsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestsControllerCtrl = $controller('RequestsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
