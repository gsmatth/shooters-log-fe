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
  const vm = this;
  vm.user = {
    firstName: null,
    lastName: null,
    suffix: null
  };

  $log.debug('scorecardCtrl.fetchScorecard');

  vm.fetchScorecard = function(){
    scorecardService.fetchUser()
    .then(user => {
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.user.suffix = user.nameSuffix;
    })
    .catch(err => {
      $log.error('no user fetched', err.message);
    });

    scorecardService.getScorecard(vm.compToDisplay._id)
    .then( scorecard => {
      this.scorecard = scorecard;

      for (var i = 0; i < 20; i++) {
        vm.match1Scores.scores.push(scorecard.shots[0][i].score);
        vm.match2Scores.scores.push(scorecard.shots[1][i].score);
        vm.match3Scores.scores.push(scorecard.shots[2][i].score);
      }

      vm.convertScore(vm.match1Scores);
      vm.convertScore(vm.match2Scores);
      vm.convertScore(vm.match3Scores);
    })
    .catch( () => {
      $log.err('Sad dog, no fetch');
    });
  };

  // match totaling logic
  vm.match1Scores = {scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.match2Scores ={scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.match3Scores = {scores: [], xCount:0, matchAggregate:[], matchScoreTotal: 0, hiddenScores: []};
  vm.allMatchScores = [vm.match1Scores, vm.match2Scores, vm.match3Scores];

  vm.match1Aggregate = [];
  vm.testReduce = 0;
  vm.totalCompScore = 0;
  vm.totalXCount = 0;

  vm.convertScore = (matchObject) => {
    console.log('scorecardCtrl matchObject:', matchObject);

    vm.matchObject = matchObject;
    vm.matchObject.hiddenScores = angular.copy( this.matchObject.scores);
    vm.xCheck(this.matchObject);
    vm.matchObject.matchAggregate = vm.matchObject.hiddenScores.map(Number);
    vm.matchObject.matchScoreTotal = vm.matchObject.matchAggregate.reduce((acc, cur) => acc + cur, 0);
    vm.totalCompScore = this.match1Scores.matchScoreTotal + vm.match2Scores.matchScoreTotal + vm.match3Scores.matchScoreTotal;
    vm.totalXCount = vm.match1Scores.xCount + vm.match2Scores.xCount + vm.match3Scores.xCount;
  };

  vm.xCheck = (matchObject) => {
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

}]);
