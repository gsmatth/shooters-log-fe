'use strict';

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('LoadBookController', ['$log', 'loadBookService', LoadBookController]);

function LoadBookController($log, loadBookService) {

  this.showModal = false;
  this.loadForm = false;
  this.showForm = function(){
    this.loadForm = true;
  };

  this.selectLoad = function(load){
    this.showModal = true;
    this.modalLoad = load;
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
