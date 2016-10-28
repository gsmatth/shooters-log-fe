'use strict';

let baseUrl = 'http://localhost:3000/api/user/load/testload';
let headers = {
  'Content-Type': 'application/json',
  'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI',
  'Accept':'application/json, text/plain, */*'
};

describe('testing loadTestService', function(){
  beforeEach(() => {
    angular.mock.module('appShooter');
    angular.mock.inject((loadTestService, $httpBackend) => {
      this.loadTestService = loadTestService;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('should post and return a load-test', () => {
    this.$httpBackend.expectPOST(baseUrl, {userId: '134acaaf2542fac423acc225', loadId: '141414afacafac2424acf3fa', testShots: [2500, 2600, 2550]}, headers)
    .respond(200, {_id: '1425aa244abcdf251425aacc', userId: '134acaaf2542fac423acc225', loadId: '141414afacafac2424acf3fa', testShots: [2500, 2600, 2550]});

    this.loadTestService.createLoadTest({userId: '134acaaf2542fac423acc225', loadId: '141414afacafac2424acf3fa', testShots: [2500, 2600, 2550]})
    .then(loadTest => {
      expect(loadTest._id).toBe('1425aa244abcdf251425aacc');
      expect(Array.isArray(loadTest.testShots)).toBe(true);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

  it('should fetch a load-test', () => {
    let headers = {
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI', 'Accept':'application/json, text/plain, */*'
    };

    this.$httpBackend.expectGET(`${baseUrl}/1425aa244abcdf251425aacc`, headers)
    .respond(200, {_id: '1425aa244abcdf251425aacc', userId: '134acaaf2542fac423acc225', loadId: '141414afacafac2424acf3fa', testShots: [2500, 2600, 2550]});

    this.loadTestService.fetchLoadTest('1425aa244abcdf251425aacc')
    .then(loadTest => {
      expect(loadTest._id).toBe('1425aa244abcdf251425aacc');
      expect(loadTest.userId).toBe('134acaaf2542fac423acc225');
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

  it('should delete a load-test', () => {
    let headers = {
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI', 'Accept':'application/json, text/plain, */*'
    };

    this.$httpBackend.expectDELETE(`${baseUrl}/1425aa244abcdf251425aacc`, headers)
    .respond(204, {});

    this.loadTestService.deleteLoadTest('1425aa244abcdf251425aacc')
    .then(loadTest => {
      expect(Object.keys(loadTest).length).toBe(0);
      expect(loadTest.constructor).toBe(Object);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });
});
