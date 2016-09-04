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
  vm.match1XCount = 0;
  vm.match2Scores =[];
  vm.match3Scores =[];
  vm.allMatchScores = [vm.match1Scores, vm.match2Scores, vm.match3Scores];

  vm.match1Aggregate = [];
  vm.testReduce = 0;

  this.convertScore = (array) => {

    vm.tempArray = array;
    console.log('this is array.name', object.tempArray.name);
    vm.xCheck(vm.tempArray);
    vm.match1Aggregate = vm.tempArray.map(Number);
    $log.debug('this is match1Aggregate after map function', vm.match1Aggregate);
    // vm.aggregate(vm.match1Aggregate);
    vm.testReduce = vm.match1Aggregate.reduce((acc, cur) => acc + cur, 0);
    console.log('this is match1Aggregate after vm.aggregate', vm.match1Aggregate);
    console.log('this is testReduce', vm.testReduce);
  };

  vm.xCheck = (array) =>{
    $log.debug('entered xcheck');
    $log.debug('this is the array passed in', array);
    for (var i = 0; i < 20; i++){
      $log.debug('entered for loop in xcheck');
      if(array[i] === 'x' || array[i] === 'X'){
        $log.debug('entered if statement in xcheck');
        array.splice(i, 1, 10);
      } else if(array[i] === 'm' || array[i] === 'M'){
        array.splice(i,1,0);
      }
    }
  };
  this.createComp = function(){
    scorecardService.createCompetition(vm.competition)
    .then((competition) => {
      $log.log('newly created competition returned to createComp (): ', competition);
      let competitionId = competition._id;
      vm.match.competitionId = competitionId;
      scorecardService.createMatches(vm.match, competitionId)
      .then((matches) => {
        $log.log('newly created matches array returned to createComp (): ', matches);
        scorecardService.createMatchShots(competitionId, matches, vm.allMatchScores, vm.shot)
        .then(() => {
          $log.log('newly created scores array of arrays returned to createComp (): ', vm.allMatchScores);
        })
        .catch((err) => ('something', err));
      });
    });
  };
}
