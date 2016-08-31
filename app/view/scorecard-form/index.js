'use strict';
require('./scorecard-form.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('CreateScorecardFormController', ['$log', 'scorecardService', CreateScorecardFormController]);

function CreateScorecardFormController($log, scorecardService){


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
