'use strict';

describe('Controller: WeekselectorCtrl', function () {

  // load the controller's module
  beforeEach(module('holidayApp'));

  var WeekselectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeekselectorCtrl = $controller('WeekselectorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
