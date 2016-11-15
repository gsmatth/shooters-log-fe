'use strict';

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.directive('appLoadBookDash', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./load-book-dash.html'),
    controller: 'LoadDisplayController',
    controllerAs: 'loadDisplayCtrl',
    bindToController: true,
    scope: {
      loadToDisplay: '='
    }
  };
});

appShooter.controller('LoadDisplayController', ['$log', 'loadBookService', 'loadTestService', function($log, loadBookService, loadTestService) {
  $log.debug('load-book-dash-controller fetching load');

  loadBookService.getLoad(this.loadToDiplay._id)
  .then(load => {
    this.loadData = load;
  })
  .catch(err => {
    $log.error('Failed to GET load', err.message);
  });
}]);
