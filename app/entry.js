'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
require('./scss/lib/font/dual/_dual.scss');
require('./scss/lib/font/signpainter-housescript/_signpainter.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');

// angular modules
angular.module('appShooter', [ngRoute, ngAnimate])
.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider){
  $routeProvider
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl',
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl',
  })
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
  })
  .when('/createscorecard', {
    template: require('./view/scorecard-form/scorecard-form.html'),
    controller: 'CreateScorecardFormController',
    controllerAs: 'createScorecardFormCtrl',
  })
  .when('/load-book', {
    template: require('/view/load-book/load-book.html'),
    controller: 'LoadBookController',
    controllerAs: 'loadBookCtrl'
  })
  .otherwise({
    redirectTo: '/signin',
  });
}]);

// angular services
require('./service/auth-service');
require('./service/scorecard-service');

// angular controllers
require('./view/signup');
require('./view/signin');
require('./view/home');
require('./view/scorecard-form');
require('./view/load-book');

// angular components
require('./component/logo');
require('./component/nav');
require('./component/menu');
require('./component/scorecard');
require('./component/scorecardDash');
require('./component/scorecardModal');
