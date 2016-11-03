'use strict';
require('./load-book.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('LoadBookController', ['$log','$scope', '$location', LoadBookController]);

function LoadBookController($log, $scope, $location){
  $log.debug('entered LoadBookController');
}
