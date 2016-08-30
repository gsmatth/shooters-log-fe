'use strict';
require('./nav.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.component('appNav', {
  template: require('./nav.html')
});
