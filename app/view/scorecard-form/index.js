'use strict';
require('./scorecard-form.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('CreateScorecardFormController', ['$log', CreateScorecardFormController]);

function CreateScorecardFormController($log){
  $log.debug('entered CreateScorecardFormController');

}
