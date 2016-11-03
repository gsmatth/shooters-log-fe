'use strict';


const angular = require('angular');

angular.module('appShooter').factory('scorecardService', ['$log', '$q', '$window', '$http', scorecardService]);


function scorecardService($log, $q, $window, $http) {
  $log.debug('entered scorecardService');
  let service = {};
  let token = $window.localStorage.getItem('token');
  service.data = [];
  service.competitions = [];

  service.fetchUser = function(){
    $log.debug('entered service.fetchUser');
    let url = `${__API_URL__}/api/user`;

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.get(url, config)
    .then(res => {
      $log.warn('user fetch success', res.data);
      this.user = res.data;
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('failed to return a user', err);
      return $q.reject(err);
    });
  };

  service.createCompetition = function(data) {
    $log.debug('entered service.createCompetition');
    let url =`${__API_URL__}/api/competition`;

    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    return $http.post(url, data, config)
    .then(res => {
      $log.info('Success', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('Failed to return createCompetition data', err);
      return $q.reject(err);
    });
  };


  service.createMatches = function(matchModel, competitionId) {
    $log.debug('entered service.createMatches');

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
    $log.debug('entered service.createMatchShots');

    var config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };

    var shots = [];

    for (var i = 0; i < 3; i++ ){
      var matchId = matches[i].data._id;
      for (var ii = 0; ii < 20; ii++) {
        var url =`${__API_URL__}/api/competition/${competitionId}/match/${matchId}/shot`;
        var newShot = angular.copy(shotModel);
        newShot.userId = matches[i].data.userId;
        newShot.matchId = matches[i].data._id;
        newShot.score = allMatchScores[i].scores[ii];
        newShot.shotNumber = (ii + 1);
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

  service.getAllCompetitions = function() {
    let url =`${__API_URL__}/api/competitions`;

    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.info('Success', res.data);
      console.log('scorecard-service.getAllCompetitions res.data', res.data);
      this.competitions.push(res.data);
      return $q.resolve(res.data);

    })
    .catch(err => {
      $log.error('Failed to return Competitions data', err);
      return $q.reject(err);
    });
  };

  service.getScorecard = function(compId) {
    let url =`${__API_URL__}/api/scorecard/${compId}`;
    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.warn('Success in getScorecard', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('Failed to return Competitions data', err);
      return $q.reject(err);
    });
  };

  $log.debug('exiting scorecardService and returning service object', service);

  return service;
}
