'use strict';


const angular = require('angular');

angular.module('appShooter').factory('scorecardService', ['$log', '$q','$window', '$http', scorecardService]);


function scorecardService($log, $q, $window, $http) {
  $log.debug('entered scorecardService');
  let service = {};
  let token = $window.localStorage.getItem('token');
  service.data = [];
  service.competitions = [];


  service.createCompetition = function(data) {
    let url ='http://localhost:3000/api/competition';

    console.log('the token in is', data);
    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    console.log('This is the data', data);
    return $http.post(url, data, config)
    .then(res => {
      $log.info('Success', res.data);
      console.log('newly created competition: ',res.data);
      return (res.data);
    })
    .catch(err => {
      $log.error('Failed to return createCompetition data', err);
      return $q.reject(err);
    });
  };


  service.createMatches = function(matchModel, competitionId) {
    let url =`${__API_URL__}/api/competition/${competitionId}/match`;

    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };

    let matches = [];
    for (var i = 1; i < 4; i++ ){
      var newMatch = angular.copy(matchModel);
      newMatch.matchNumber = i;
      console.log('this is the matchNumber: ', newMatch.matchNumber);
      console.log('this is the newMatch: ', newMatch);
      matches.push($http.post(url, newMatch, config));
    }

    return $q.all(matches)
    .then((matches) => {
      return $q.resolve(matches);
    })
    .catch( err => {
      return $q.reject(err);
    });
  };

  service.createMatchShots = function(competitionId, matches, allMatchScores, shotModel) {


    // var url =`${__API_URL__}/api/competition/${competitionId}/match/${matches[].data._id}/shot`;

    var config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };

    $log.log('This is the matches being passed in createMatchShots', matches);
    $log.log('This is the allMatchScores being passed in createMatchShots', allMatchScores);
    $log.log('This is the competitionId being passed in createMatchShots', competitionId);

    var shots = [];

    //var newShot = angular.copy(shotModel);

    for (var i = 0; i < 3; i++ ){
      var matchId = matches[i].data._id;
      for (var ii = 0; ii < 20; ii++) {
        var url =`${__API_URL__}/api/competition/${competitionId}/match/${matchId}/shot`;
        var newShot = angular.copy(shotModel);
        var shotNumberCounter = ii;
        $log.log('shotNumberCounter value: ', shotNumberCounter);
        newShot.userId = matches[i].data.userId;
        newShot.matchId = matches[i].data._id;
        newShot.score = allMatchScores[i][ii];
        $log.log('match specific array of score sin allMatchScores right before they are used: ', allMatchScores[i]);
        $log.log('the current value for score: ', allMatchScores[i][ii]);
        newShot.shotNumber = ii;
        $log.log('newShot.shotNumber PROPERTY value: ', newShot.shotNumber);
        if(newShot.score === 'X' || newShot.score === 'x') {
          newShot.xValue = true;
        } else {
          newShot.xValue = false;
        }
        var shot = $http.post(url, newShot, config);
        shots.push(shot);
      }
    }
    return $q.all(shots)
    .then((shots) => {
      return $q.resolve(shots);
    })
    .catch( err => {
      return $q.reject(err);
    });
  };

  $log.debug('exiting scorecardService and returning service object', service);
  
  return service;
}
