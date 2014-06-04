'use strict';

describe('Service: RequestsService', function () {

  // load the service's module
  beforeEach(module('holidayApp'));

  // instantiate service
  var RequestsService;
  beforeEach(inject(function (_RequestsService_) {
    RequestsService = _RequestsService_;
  }));

  it('should do something', function () {
    expect(!!RequestsService).toBe(true);
  });

});
