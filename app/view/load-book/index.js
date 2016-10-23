'use strict';

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('LoadBookController', ['$log', 'loadBookService', LoadBookController]);

function LoadBookController($log, loadBookService) {

  this.loadForm = false;
  this.showForm = function(){
    this.loadForm = true;
  };

  loadBookService.getAllLoadBooks()
  .then(loads => {
    this.loads = loads;
    this.loads.sort(function(a, b) {
      a = new Date(a.dateOf);
      b = new Date(b.dateOf);
      return a>b ? -1 : a<b ? 1 : 0;
    })
    .catch(err => {
      $log.error('Failed to fetch loads', err.message);
    });
  });
}
