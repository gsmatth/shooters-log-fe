'use strict';
require('./_scorecardModal.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');
appShooter.directive('appScorecardModal', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./scorecardModal.html'),
    controller: 'ScorecardController',
    controllerAs: 'scorecardCtrl',
    scope: {
      closeModal: '&',
      modalScorecard: '='
    }
  };
});
