'use strict';
require('./_home.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.controller('HomeController', ['$log', 'scorecardService', HomeController]);

function HomeController($log, scorecardService){
  console.log('homeCtrl hit');

  this.buttonTxt = 'View All Scorecards';
  this.displayRecentCards = true;

  this.toggle = function(){
    this.displayRecentCards = !this.displayRecentCards;
    if (this.displayRecentCards === true) {
      this.buttonTxt = 'View All Scorecards';
      return this.displayScorecards = this.competitions.slice(0, 5);
    }
    if (this.displayRecentCards === false){
      this.buttonTxt = 'View Recent Scorecards';
      return this.displayScorecards = this.competitions;
    }
  };

  scorecardService.getAllCompetitions()
  .then((competitions) => {
    this.competitions = competitions;
    this.competitions.sort(function(a, b) {
      a = new Date(a.dateOf);
      b = new Date(b.dateOf);
      return a>b ? -1 : a<b ? 1 : 0;
    });

    this.displayScorecards = this.competitions.slice(0, 5);

    console.log('homeCtrl competitions', competitions);
    console.log('homeCtrl displayScorecards', this.displayScorecards);

  })
  .catch((err) => {
    $log.error('that failed', err);
  });
}
