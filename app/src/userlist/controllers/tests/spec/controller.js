'use strict';

describe('Controller: UserlistControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('holidayApp'));

  var UserlistControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserlistControllerCtrl = $controller('UserlistControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
