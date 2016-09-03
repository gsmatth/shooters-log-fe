'use strict';
require('./scorecard-form.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('CreateScorecardFormController', ['$log','$scope', 'scorecardService', CreateScorecardFormController]);

function CreateScorecardFormController($log, $scope, scorecardService){
  $log.debug('entered CreateScorecardFormController');
  const vm = this;

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

  vm.match1Scores =[];
  vm.match2Scores =[];
  vm.match3Scores =[];
  vm.allMatchScores = [vm.match1Scores, vm.match2Scores, vm.match3Scores];



  this.createComp = function(){
    scorecardService.createCompetition(vm.competition)
    .then((competition) => {
      $log.log('newly created competition returned to createComp (): ', competition);
      let competitionId = competition._id;
      vm.match.competitionId = competitionId;
      scorecardService.createMatches(vm.match, competitionId)
      .then((matches) => {
        $log.log('newly created matches array returned to createComp (): ', matches);
        $log.log('matches[0]', matches[0]);
        $log.log('matches[1]', matches[1]);
        $log.log('matches[0].data._id: ', matches[0].data._id);
        $log.log('matches[1].data._id: ', matches[1].data._id);
        var matchIds = [matches[0].data._id, matches[1].data._id, matches[1].data._id];
        //$log.log('matchIds created in createComp: ', matches[0]);
        scorecardService.createMatchShots(competitionId, matches, vm.allMatchScores, vm.shot)
        .then((scores) => {
          $log.log('newly created scores array of arrays returned to createComp (): ', scores);
        })
        .catch((err) => ('something', err));
      });
    });
  };
}
