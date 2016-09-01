'use strict';
require('./logo.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.component('appLogo', {
  template: require('./logo.html')
});
