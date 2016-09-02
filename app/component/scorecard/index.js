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
  scorecardService.getScorecard('5775cdcd8023621100ee87f6')
}
