'use strict';
require('./scorecard-form.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('CreateScorecardFormController', ['$log','$scope', '$location', 'scorecardService', CreateScorecardFormController]);

function CreateScorecardFormController($log, $scope, $location, scorecardService){
  $log.debug('entered CreateScorecardFormController');
  const vm = this;
  vm.scoreInputValidation = /^([MmxX]|[056789]|[1][0])$/;
  vm.user = {
    firstName:  null,
    lastName:   null
  };
  $log.debug('user: ', vm.user);

  vm.competition = {
    location:   null,
    action:     null,
    caliber:    null,
    dateOf:     null
  };
  $log.debug('competition: ', vm.competition);

  vm.match = {
    competitionId:    null,
    //userId:           nul
    matchNumber:      null,
    targetNumber:     null,
    distanceToTarget: null,
    relay:            null,
    //startTime:        null,
    //temperature:      null,
    //windDirection:    null,
    //windSpeed:        null,
    //lightDirection:   null,
    //weather:          null
  };

  $log.debug('match: ', vm.match);

  vm.shot = {
    //userId:           null,
    matchId:          null,
    xValue:           null,
    score:            null,
    // dateOf:           null,
    shotNumber:       null
    // polarCoords:      null,
    // cartesianCoords:  null,
    // elevation:        null,
    // windage:          null,
    // practice:         null,
    // sighter:          null,
    // record:           null
  };
  $log.debug('shot: ', vm.shot);

  vm.match1Scores = {scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.match2Scores ={scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.match3Scores = {scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.allMatchScores = [vm.match1Scores, vm.match2Scores, vm.match3Scores];

  vm.match1Aggregate = [];
  vm.testReduce = 0;
  vm.totalCompScore = 0;
  vm.totalXCount = 0;

  this.convertScore = (matchObject) => {

    for (var i = 0; i < matchObject.scores.length; i++){
      if(/^([MmxX]|[056789]|[1][0])$/g.exec(matchObject.scores[i])){
        continue;
      } else {
        return;
      }
    }
    vm.matchObject = matchObject;
    vm.matchObject.hiddenScores = angular.copy( vm.matchObject.scores);
    vm.xCheck(vm.matchObject);
    vm.matchObject.matchAggregate = vm.matchObject.hiddenScores.map(Number);
    vm.matchObject.matchScoreTotal = vm.matchObject.matchAggregate.reduce((acc, cur) => acc + cur, 0);
    vm.totalCompScore = vm.match1Scores.matchScoreTotal + vm.match2Scores.matchScoreTotal + vm.match3Scores.matchScoreTotal;
    vm.totalXCount = vm.match1Scores.xCount + vm.match2Scores.xCount + vm.match3Scores.xCount;
  };

  vm.xCheck = (matchObject) =>{
    matchObject.xCount = 0;
    for (var i = 0; i < 20; i++){
      if(matchObject.scores[i] === 'x' || matchObject.scores[i] === 'X'){
        matchObject.xCount ++;
        matchObject.hiddenScores.splice(i, 1, 10);
      } else if(matchObject.scores[i] === 'm' || matchObject.scores[i] === 'M'){
        matchObject.hiddenScores.splice(i,1,0);
      }
    }
  };
  this.createComp = function(){
    scorecardService.createCompetition(vm.competition)
    .then((competition) => {
      let competitionId = competition._id;
      vm.match.competitionId = competitionId;
      scorecardService.createMatches(vm.match, competitionId)
      .then((matches) => {
        scorecardService.createMatchShots(competitionId, matches, vm.allMatchScores, vm.shot)
        .then(() => {
          $log.log('newly created scores array of arrays returned to createComp (): ', vm.allMatchScores);
          $location.path('/home');
        })
        .catch((err) => ('something', $log.error(err)));
      });
    });
  };
}
