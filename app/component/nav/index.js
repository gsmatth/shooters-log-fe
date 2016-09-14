'use strict';
require('./nav.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.component('appNav', {
  template: require('./nav.html'),
  controller: 'NavController',
  controllerAs: 'navCtrl'
});

appShooter.controller('NavController', ['$log', NavController]);

function NavController($log){
  $log.log('navController working');
  this.homeIcon = require('../../scss/lib/asset/home.svg');
  this.formIcon = require('../../scss/lib/asset/createForm.svg');
}
