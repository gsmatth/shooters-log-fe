'use strict';

require('./scorecard.scss');
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
      // scorecard: '=',
    },
  };
});

appShooter.controller('ScorecardController', ['$log', 'scorecardService', function($log, scorecardService){
  $log.debug('scorecardCtrl.fetchScorecard');
  this.scorecard;
  scorecardService.getScorecard('57c8dfd81bd175dd17ffd2d8')
  .then( scorecard => {
    this.scorecard = scorecard;
    console.log('this.scorecard', this.scorecard);
  })
  .catch( () => {
    $log.error('Sad dog, no fetch');
  });

}]);
