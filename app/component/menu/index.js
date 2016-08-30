'use strict';
require('./menu.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');
appShooter.component('appMenu', {
  template: require('./menu.html'),
  controller: 'MenuController'
});

appShooter.controller('MenuController', ['$log', '$location', '$scope', MenuController]);

function MenuController($log, $location, $scope){
  const vm = this;

  vm.hiddenMenuPaths = [
    '/signin',
    '/signup'
  ];

  $log.debug('entered MenuController');
  vm.showMenu = true;

  vm.hamburgerHidden = checkIndexOfMenuPaths();

  console.log('this is the $location.path', $location.path());

  function checkIndexOfMenuPaths() {
    let currentPath = $location.path();
    return vm.hiddenMenuPaths.indexOf(currentPath) !== -1;
  }

  $scope.$on('$routeChangeSuccess', () => {
    vm.hamburgerHidden = checkIndexOfMenuPaths();
  });



}
