'use strict';

describe('testing the scorecard controller', function(){
  beforeEach( () => {
    angular.mock.module('appShooter');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.scorecardCtrl = new $controller('ScorecardController');
    });
  });

  afterEach( () => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });


  it('should contain the scorecardCtrl object', () => {
    expect(typeof this.scorecardCtrl).toBe('object');
    expect(typeof this.scorecardCtrl.fetchScorecard).toBe('function');
  });

  describe('testing the scorecard controller', () => {
    let url = 'http://localhost:3000/api';
    let headers = {
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI',
      'Accept':'application/json, text/plain, */*'
    };

    beforeEach(() => {
      var shots = [[], [], []];
      for (var i = 0; i < 20; i++) {
        shots[0].push({matchId: '246810', score: 1, shotNumber: (i + 1), userId: 'test Id'});
        shots[1].push({matchId: '4681012', score: 1, shotNumber: (i + 1), userId: 'test Id'});
        shots[2].push({matchId: '68101214', score: 1, shotNumber: (i + 1), userId: 'test Id'});
      }

      this.scorecardCtrl.user = {
        firstName: 'testy',
        lastName: 'testerson',
        suffix: 'ts',
        nraNumber: '7357',
        nraQualification: 'tester'
      };
      this.scorecardCtrl.scorecard = {
        competition: {
          _id: '0123456789',
          action: 'test action',
          caliber: 6,
          dateOf: 'test Date',
          location: 'test range',
          userId: 'test Id'
        },
        matches: [
          {_id: '246810', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 1, relay: 4, targetNumber: 5, userId: 'test Id'},
          {_id: '4681012', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 2, relay: 4, targetNumber: 5, userId: 'test Id'},
          {_id: '68101214', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 3, relay: 4, targetNumber: 5, userId: 'test Id'}
        ],
        shots: [
          [shots[0]],
          [shots[1]],
          [shots[2]]
        ]
      };
      this.scorecardCtrl.compToDisplay = this.scorecardCtrl.scorecard.competition;
    });

    it('should fetch a scorecard', () => {
      this.$httpBackend.expectGET(`${url}/user`, headers).respond(200, {
        firstName: 'testy',
        lastName: 'testerson',
        suffix: 'ts',
        nraNumber: '7357',
        nraQualification: 'tester'
      });
      this.$httpBackend.expectGET(`${url}/scorecard/0123456789`, headers).respond(200, {
        competition: {
          _id: '0123456789',
          action: 'test action',
          caliber: 6,
          dateOf: 'test Date',
          location: 'test range',
          userId: 'test Id'
        },
        matches: [
          {_id: '246810', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 1, relay: 4, targetNumber: 5, userId: 'test Id'},
          {_id: '4681012', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 2, relay: 4, targetNumber: 5, userId: 'test Id'},
          {_id: '68101214', competitionId: '0123456789', distanceToTarget: 1000, matchNumber: 3, relay: 4, targetNumber: 5, userId: 'test Id'}
        ],
        shots: [
          [
            {matchId: '246810', score: 1, shotNumber: 1, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 2, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 3, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 4, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 5, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 6, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 7, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 8, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 9, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 10, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 11, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 12, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 13, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 14, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 15, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 16, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 17, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 18, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 19, userId: 'test Id'},
            {matchId: '246810', score: 1, shotNumber: 10, userId: 'test Id'}
          ],
          [
            {matchId: '4681012', score: 1, shotNumber: 1, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 2, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 3, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 4, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 5, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 6, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 7, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 8, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 9, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 10, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 11, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 12, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 13, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 14, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 15, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 16, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 17, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 18, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 19, userId: 'test Id'},
            {matchId: '4681012', score: 1, shotNumber: 20, userId: 'test Id'},
          ],
          [
            {matchId: '68101214', score: 1, shotNumber: 1, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 2, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 3, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 4, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 5, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 6, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 7, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 8, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 9, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 10, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 11, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 12, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 13, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 14, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 15, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 16, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 17, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 18, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 19, userId: 'test Id'},
            {matchId: '68101214', score: 1, shotNumber: 20, userId: 'test Id'},
          ]
        ]
      });

      this.scorecardCtrl.fetchScorecard();
      expect(typeof this.scorecardCtrl.user).toBe('object');
      expect(this.scorecardCtrl.user.firstName).toBe('testy');
      expect(typeof this.scorecardCtrl.scorecard).toBe('object');
      expect(this.scorecardCtrl.scorecard.competition._id).toBe('0123456789');
      expect(this.scorecardCtrl.scorecard.shots.length).toBe(3);

      this.$httpBackend.flush();
    });
  });
});
