'use strict';
require('./menu.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');
appShooter.component('appMenu', {
  template: require('./menu.html'),
  controller: 'MenuController'
});

appShooter.controller('MenuController', ['$log', MenuController]);

function MenuController($log){
  $log.debug('entered MenuController');
  this.showMenu = true;

}
