'use strict';

describe('Directive: userlist/directive', function () {

  // load the directive's module
  beforeEach(module('holidayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directive></directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userlist/directive directive');
  }));
});
