'use strict';

require('./load-book.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('LoadBookController', ['$log', 'loadBookService', 'loadTestService', LoadBookController]);

function LoadBookController($log, loadBookService, loadTestService) {

  this.showTestLoads = false;
  this.loadForm = false;
  this.showForm = function(){this.loadForm = true;};

  this.selectLoad = function(load){
    this.showTestLoads = true;
    loadTestService.getAllTestLoads(load.id)
    .then(testLoads => {
      this.testLoads = testLoads;
    })
    .catch(err => {
      $log.error('No test loads returned to loadBook controller', err.message);
    });
  };

  this.createLoad = function(){
    console.log('the front end load', this.load);
    loadBookService.createLoad(this.load)
    .then(load => {
      $log.warn('load created:', load);
      this.loads.push(load);
    })
    .catch(err => {
      $log.error('failed to create load', err.message);
    });
  };

  loadBookService.getAllLoads()
  .then(loads => {
    this.loads = loads;
    console.log('here\'s the loads:', this.loads);
    this.loads.sort(function(a, b) {
      a = new Date(a.dateOf);
      b = new Date(b.dateOf);
      return a>b ? -1 : a<b ? 1 : 0;
    });
  })
  .catch(err => {
    $log.error('Failed to fetch loads', err.message);
  });
}
