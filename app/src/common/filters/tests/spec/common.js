'use strict';

describe('Filter: common', function () {

  // load the filter's module
  beforeEach(module('holidayApp'));

  // initialize a new instance of the filter before each test
  var common;
  beforeEach(inject(function ($filter) {
    common = $filter('common');
  }));

  it('should return the input prefixed with "common filter:"', function () {
    var text = 'angularjs';
    expect(common(text)).toBe('common filter: ' + text);
  });

});
