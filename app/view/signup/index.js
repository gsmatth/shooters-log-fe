'use strict';
require('./_signup.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('SignupController', ['$log', '$location', '$window', 'authService', SignupController]);

function SignupController($log, $location, $window, authService){
  $log.debug('signup controller init');
  this.errorDisplay = false;
  this.signup = function(){
    $log.debug('signupCtrl.signup');
    authService.signup(this.user)
    .then(token => {
      $log.info('token', token);
      $location.path('/home');
      $window.location.reload();
    })
    .catch(err => {
      $log.error(err);
      this.errorDisplay= true;
    });
  };
}
