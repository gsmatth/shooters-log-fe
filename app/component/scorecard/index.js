'use strict';

require('./_scorecard.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');
appShooter.directive('appScorecardGet', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./scorecard.html'),
    controller: 'ScorecardController',
    controllerAs: 'scorecardCtrl',
    bindToController: true,
    scope: {
      compToDisplay: '=',
    },
  };
});

appShooter.controller('ScorecardController', ['$log', 'scorecardService', function($log, scorecardService){
  $log.debug('scorecardCtrl.fetchScorecard');
  this.fetchScorecard = function(){
    scorecardService.getScorecard(this.compToDisplay._id)
    .then( scorecard => {
      this.scorecard = scorecard;
    })
      .catch( () => {
        $log.err('Sad dog, no fetch');
      });
  };
}]);
