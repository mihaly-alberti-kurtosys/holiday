'use strict';

describe('Service: Calendarservice', function () {

  // load the service's module
  beforeEach(module('holidayApp'));

  // instantiate service
  var Calendarservice;
  beforeEach(inject(function (_Calendarservice_) {
    Calendarservice = _Calendarservice_;
  }));

  it('should do something', function () {
    expect(!!Calendarservice).toBe(true);
  });

});
