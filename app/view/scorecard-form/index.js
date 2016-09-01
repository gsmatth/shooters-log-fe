'use strict';
require('./scorecard-form.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('CreateScorecardFormController', ['$log','$scope', 'scorecardService', CreateScorecardFormController]);

function CreateScorecardFormController($log, $scope, scorecardService){
  $log.debug('enetered CreateScorecardFormController');
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
    matchNumber:      null,
    targetNumber:     null,
    distanceToTarget: null,
    relay:            null,
    startTime:        null,
    temperature:      null,
    windDirection:    null,
    windSpeed:        null,
    lightDirection:   null,
    weather:          null
  };
  $log.debug('match: ', vm.match);

  // this.mockCompData = {
  //   location: 'another test location',
  //   action: 'another test action',
  //   caliber: 308,
  //   dateOf: 'May 28 2016'
  // };

  $log.debug('entered CreateScorecardFormController');
  this.createComp = function(data){
    scorecardService.createCompetition(data)
    .then((competition) => {
      console.log(competition);
    });
  };
}
