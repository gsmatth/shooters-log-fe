'use strict';
require('./_signin.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('SigninController', ['$log', '$location', '$window', 'authService', SigninController]);

function SigninController($log, $location, $window, authService){
  this.errorDisplay = false;
  $log.debug('init signinController');
  this.getToken = function(){
    $log.debug('signinController.getToken');
    authService.getToken()
    .then(() => {
      $location.path('/home');
    });
  };

  this.signin = function(){
    $log.debug('signinCtrl.signin');
    authService.signin(this.user)
    .then(token => {
      $log.info('token', token);
      $location.path('/home');
      $window.location.reload();
    })
    .catch(err => {
      $log.error(err);
      this.errorDisplay = true;
      console.log(this.errorDisplay);
    });
  };
}
