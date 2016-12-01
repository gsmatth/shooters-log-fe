'ues strict';

const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.factory('loadTestService', ['$log', '$q', '$http', '$window', loadTestService]);

function loadTestService($log, $q, $http, $window){
  $log.debug('loadTestService run');
  let service = {};
  let token = $window.localStorage.getItem('token');

  service.createLoadTest = function(loadData){
    $log.debug('running createLoadTest');
    let url = `${__API_URL__}/api/user/load/testload`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.post(url, loadData, config)
    .then(res => {
      $log.info('loadTest created', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('failed to create testLoad', err.message);
      return $q.reject(err);
    });
  };

  service.fetchAllLoadTests = function(loadId) {
    $log.debug('fetching all test loads');
    let url = `${__API_URL__}/api/user/load/testLoads/${loadId}`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    };

    return $http.get(url, config)
    .then(res => {
      $log.debug('loadTests fetch', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('failed to fetch loadTests', err.message);
      return $q.reject(err);
    });
  };

  service.fetchLoadTest = function(testLoadId){
    $log.debug('running fetchLoadTest');
    let url = `${__API_URL__}/api/user/load/testload/${testLoadId}`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.get(url, config)
    .then(res => {
      $log.info('loadTest fetched', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('dailed to fetch loadTest', err.massage);
      return $q.reject(err);
    });
  };

  service.deleteLoadTest = function(testLoadId){
    $log.debug('running deleteLoadTest');
    let url = `${__API_URL__}/api/user/load/testload/${testLoadId}`;
    let config = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.delete(url, config)
    .then(res => {
      $log.info('loadTest deleted', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('failed to delete testLoad', err.message);
      return $q.reject(err);
    });
  };

  return service;
}
