'use strict';

describe('Directive: weekselector', function () {

  // load the directive's module
  beforeEach(module('holidayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weekselector></weekselector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weekselector directive');
  }));
});
