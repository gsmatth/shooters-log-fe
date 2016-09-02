'use strict'

require('./scorecard.scss');
const angular = require('angular');
angular.module('appShooter').directive('appScorecardGet', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./scorecard.html'),
    controller: ['$log', 'scorecardService', ScorecardController],
    controllerAs: 'scorecardCtrl',
    bindToController: true,
    scope: {
      scorecard: '=',
    },
  }
});

function ScorecardController($log, scorecardService){
  $log.debug('scorecardCtrl.fetchScorecard');
  scorecardService.getScorecard('57c8dfd81bd175dd17ffd2d8')
  .then( scorecard => {
    console.log("scorecard", scorecard);
    scorecardService.competitions.push(scorecard);
    // this.scorecard = scorecard;
  })
    .catch( () => {
      alert('Sad dog, no fetch')
    });
};
