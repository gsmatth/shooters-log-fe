'use strict';

describe('testing the scorecard service', function(){
  let url = 'http://localhost:3000/api';

  let headers = {
    'Content-Type':'application/json',
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI',
    'Accept':'application/json, text/plain, */*'
  };

  beforeEach(() => {
    angular.mock.module('appShooter');
    angular.mock.inject((scorecardService, $httpBackend) => {
      this.scorecardService = scorecardService;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('createCompetition should return a competition', () => {
    let dataToSend = {location: 'test location', action: 'test action', caliber: 308, dateOf: 'May 28 2016'};

    this.$httpBackend.expectPOST(`${url}/competition`, dataToSend, headers).respond(200, dataToSend);

    this.scorecardService.createCompetition(dataToSend)
    .then( competition => {
      expect(competition).toEqual(dataToSend);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

  it('createCompetition should return a 400', () => {
    let dataToSend = {};

    this.$httpBackend.expectPOST(`${url}/competition`, dataToSend, headers).respond(400, 'bad request');

    this.scorecardService.createCompetition(dataToSend)
    .then( res => {
      expect(res.status).toEqual(400);
    });

    this.$httpBackend.flush();
  });

  it('createMatch should return a match', () => {
    let dataToSend = {competitionId: '11111111111111', userId: '222222222222', matchNumber: 1, targetNumber: 4, distanceToTarget: 600, relay: 4, startTime: '16:00', temperature: 55, windDirection: 12, windSpeed:  12, lightDirection: 2, weather: 'Seattle Sunshine'};

    this.$httpBackend.expectPOST(`${url}/competition/11111111111111/match`, {competitionId: '11111111111111', userId: '222222222222', matchNumber: 1, targetNumber: 4, distanceToTarget: 600, relay: 4, startTime: '16:00', temperature: 55, windDirection: 12, windSpeed:  12, lightDirection: 2, weather: 'Seattle Sunshine'}, headers).respond(200, dataToSend);

    this.$httpBackend.expectPOST(`${url}/competition/11111111111111/match`, {competitionId: '11111111111111', userId: '222222222222', matchNumber: 2, targetNumber: 4, distanceToTarget: 600, relay: 4, startTime: '16:00', temperature: 55, windDirection: 12, windSpeed:  12, lightDirection: 2, weather: 'Seattle Sunshine'}, headers).respond(200, dataToSend);

    this.$httpBackend.expectPOST(`${url}/competition/11111111111111/match`, {competitionId: '11111111111111', userId: '222222222222', matchNumber: 3, targetNumber: 4, distanceToTarget: 600, relay: 4, startTime: '16:00', temperature: 55, windDirection: 12, windSpeed:  12, lightDirection: 2, weather: 'Seattle Sunshine'}, headers).respond(200, dataToSend);

    this.scorecardService.createMatches(dataToSend, '11111111111111')
    .then( matches => {
      expect(matches[0].data).toEqual(dataToSend);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });
  //
  // it('createMatchShots should return a bunch of shots', () => {
  //   let dataToSend = {competitionId: 111111111,
  //     matches: [{action: 'test action', caliber: 308, data: {userId: 2, _id: 1}, dateOf: 'May 28 2016'},
  //     {action: 'test action', caliber: 308, data: {userId: 2, _id: 2}, dateOf: 'May 28 2016'},
  //     {action: 'test action', caliber: 308, data: {userId: 2, _id: 3}, dateOf: 'May 28 2016'}], {{scores = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,}], {scores = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,]}, {scores = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,]}}, shotModel = {matchId: null, xValue; null, score: null, shotNumber: null}};
  //
  //   this.$httpBackend.expectPOST(`${url}/competition/111111111/match/222222222/shot`, dataToSend, headers).respond(200, dataToSend);
  //
  //   this.scorecardService.createMatchShots(dataToSend)
  //   .then( competition => {
  //     expect(competition).toEqual(dataToSend);
  //   })
  //   .catch(err => {
  //     expect(err).toBe(undefined);
  //   });
  //
  //   this.$httpBackend.flush();
  // });

  it('getAllCompetitions should return an array of competitions', () => {
    let headers = {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI','Accept':'application/json, text/plain, */*'};

    let dataToRecieve = [{location: 'test location', action: 'test action', caliber: 308, dateOf: 'May 28 2016'}, {location: 'test location', action: 'test action', caliber: 308, dateOf: 'May 28 2016'}, {location: 'test location', action: 'test action', caliber: 308, dateOf: 'May 28 2016'}];

    this.$httpBackend.expectGET(`${url}/competitions`, headers).respond(200, dataToRecieve);

    this.scorecardService.getAllCompetitions()
    .then( competitions => {
      expect(competitions).toEqual(dataToRecieve);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

  it('getScorecard should return a competition, three matches and three arrays of shots', () => {
    let headers = {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI','Accept':'application/json, text/plain, */*'};

    let dataToGet = {competition: {location: 'test location', action: 'test action', caliber: 308, dateOf: 'May 28 2016'}, matches: [{},{},{}], shots: [[],[],[]]};

    this.$httpBackend.expectGET(`${url}/scorecard/111111111`, headers).respond(200, dataToGet);

    this.scorecardService.getScorecard(111111111)
    .then( scorecard => {
      expect(scorecard).toEqual(dataToGet);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });

});
