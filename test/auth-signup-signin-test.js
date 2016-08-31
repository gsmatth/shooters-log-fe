'use strict';

describe('testing the signup and signin service', function(){
  let url = 'http://localhost:3000/api';

  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  beforeEach(() => {
    angular.mock.module('appShooter');
    angular.mock.inject((authService, $httpBackend) => {
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('signup should return a user', () => {
    this.$httpBackend.expectPOST(`${url}/signup`, {username: 'test', password:'guest', firstName: 'test', lastName: 'er'}, headers).respond(200, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI');

    this.authService.signup({username: 'test', password:'guest', firstName: 'test', lastName: 'er'})
    .then( token => {
      expect(token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI');
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

  it('signin should return a signin token', () => {
    this.$httpBackend.expectGET(`${url}/signin`, /*{username: 'testy', password: 'quest'}*/ {'Accept': 'application/json', 'Authorization': 'Basic dGVzdHk6cXVlc3Q='}).respond('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI');

    this.authService.signin({username: 'testy', password: 'quest'})
    .then(token => {
      expect(token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI');
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });
});
