'use strict';


const angular = require('angular');

angular.module('appShooter').factory('scorecardService', ['$log', '$q','$window', '$http', scorecardService]);


function scorecardService($log, $q, $window, $http) {
  $log.debug('entered scorecardService');
  let service = {};
  let token = $window.localStorage.getItem('token');
  service.data = [];


  service.createCompetition = function(data) {
    let url ='https://shooters-log-staging.herokuapp.com/api/competition';

    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    return $http.post(url, data, config)
    .then(res => {
      $log.info('Success', res.data);
      console.log(res.data);
      return (res.data);
    })
    .catch(err => {
      $log.error('Failed to return createCompetition data', err);
      return $q.reject(err);
    });
  };
  return service;
}
