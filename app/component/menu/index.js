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
  $log.debug('past hamburgerHidden');
  function checkIndexOfMenuPaths() {
    $log.debug('entered checkIndexOfMenuPaths');
    let currentPath = $location.path();
    $log.debug('currentPath', currentPath);
    $log.debug('false or true: ', vm.hiddenMenuPaths.indexOf(currentPath) !== -1);
    return vm.hiddenMenuPaths.indexOf(currentPath) !== -1;
  }

  $scope.$on('$routeChangeSuccess', () => {
    $log.debug('entered scope.on');
    vm.hamburgerHidden = checkIndexOfMenuPaths();
    $log.debug('value of vm.hamburderHidden:  ', vm.hamburgerHidden );
  });



}
