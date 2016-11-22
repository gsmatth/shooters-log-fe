'use strict';

const angular = require('angular');

angular.module('appShooter').factory('loadBookService', ['$log', '$q', '$http', '$window', loadBookService]);

function loadBookService($log, $q, $http, $window) {
  $log.debug('entered loadBookService');
  let token = $window.localStorage.getItem('token');
  let service = {};
  service.loads = [];

  service.getLoad = function(loadId){
    let url = `${__API_URL__}/api/user/load/${loadId}`;

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.info('Successful fetch:', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('Failed to fetch load', err);
      console.log(this.loads);
      return $q.reject(err);
    });
  };

  service.getAllLoads = function() {
    let url = `${__API_URL__}/api/user/loads`;

    let config = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.info('Success', res.data);
      console.log('load-book-service.getAllLoads res.data', res.data);
      this.loads.push(res.data);
      return $q.resolve(res.data);

    })
    .catch(err => {
      $log.error('Failed to return Loads data', err);
      return $q.reject(err);
    });
  };
  
  service.createLoad = function(loadData){
    let url = `${__API_URL__}/api/user/load`;

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    return $http.post(url, loadData, config)
    .then( res => {
      $log.info('Success', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('Failed to retun createLoad data', err);
      return $q.reject(err);
    });
  };

  service.deleteLoad = function(loadId){
    $log.debug('deleteLoad');
    let url = `${__API_URL__}/api/user/load/${loadId}`;
    let config = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    return $http.delete(url, config)
    .then(res => {
      $log.info('Load deleted', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.error('failed to delete Load', err.message);
      return $q.reject(err);
    });
  };

  return service;
}
