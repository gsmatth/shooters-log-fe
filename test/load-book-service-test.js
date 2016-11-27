'use strict';

describe('testing the load-book service', function(){
  let url = 'http://localhost:3000/api';

  let headers = {
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI',
    'Accept':'application/json, text/plain, */*'
  };

  beforeEach(() => {
    angular.mock.module('appShooter');
    angular.mock.inject((loadBookService, $httpBackend) => {
      this.loadBookService = loadBookService;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('getAllLoads should return several load entries', () => {
    let dataToRecieve = [
      {
        loadName:          'Loady',
        brassManufacturer: 'brass person',
        powderName:        'some powder',
        powderWeight:      5,
        bulletName:        'bullety',
        bulletWeight:      3,
        bulletCaliber:     30,
        primeManufacturer: 'primerMaker',
        primeModel:        'primerType',
        muzzleVelocity:    500,
        dateCreated:       1477516154057,
        notes:             'awesome load',
        time:              '1970-01-01T19:01:00.000Z',
        temperature:       70,
        humidity:          80,
        elevation:         1200
      },
      {
        loadName:          'Loady',
        brassManufacturer: 'brass person',
        powderName:        'some powder',
        powderWeight:      5,
        bulletName:        'bullety',
        bulletWeight:      3,
        bulletCaliber:     30,
        primeManufacturer: 'primerMaker',
        primeModel:        'primerType',
        muzzleVelocity:    500,
        dateCreated:       1477516154057,
        notes:             'awesome load',
        time:              '1970-01-01T19:01:00.000Z',
        temperature:       70,
        humidity:          80,
        elevation:         1200
      },
      {
        loadName:          'Loady',
        brassManufacturer: 'brass person',
        powderName:        'some powder',
        powderWeight:      5,
        bulletName:        'bullety',
        bulletWeight:      3,
        bulletCaliber:     30,
        primeManufacturer: 'primerMaker',
        primeModel:        'primerType',
        muzzleVelocity:    500,
        dateCreated:       1477516154057,
        notes:             'awesome load',
        time:              '1970-01-01T19:01:00.000Z',
        temperature:       70,
        humidity:          80,
        elevation:         1200
      }
    ];

    this.$httpBackend.expectGET(`${url}/user/loads`, headers).respond(200, dataToRecieve);

    this.loadBookService.getAllLoads()
    .then( loads => {
      expect(loads).toEqual(dataToRecieve);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });
  it('getAllLoads should return a 404', () => {
    let dataToRecieve = {};

    this.$httpBackend.expectGET(`${url}/user/loads`, headers).respond(404, 'Not Found');

    this.loadBookService.getAllLoads()
    .then( res => {
      expect(res.status).toEqual(404);
    });
    this.$httpBackend.flush();

  });

  it('createLoad should return a load object', () =>{
    let headers = {
      'Content-Type':'application/json',
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhkMzcxZmExZGU2NmRjYjVhNjU4NzlhYmI4MDk5YjA0ODU0ODVlYWU3OGU0OTYyMTY1NGQ5ZWJlMzBhYmJiZTQiLCJ1c2VySWQiOiI1N2M2Mzg3NTU1NDEyMTExMDAzMjNkM2EiLCJpYXQiOjE0NzI2MDgzNzN9.UFaYBDCWqKzdFyPeKNxfxBX2T8zNlqYMkP2tJKp-kQI',
      'Accept':'application/json, text/plain, */*'
    };
    let dataToSend = {
      loadName:          'Loady',
      brassManufacturer: 'brass person',
      powderName:        'some powder',
      powderWeight:      5,
      bulletName:        'bullety',
      bulletWeight:      3,
      bulletCaliber:     30,
      notes:             'some sweet notes',
      primeManufacturer: 'primerMaker',
      primeModel:        'primerType',
      dateCreated:       1477516154057,
      time:              '1970-01-01T19:01:00.000Z',
      temperature:       60,
      humidity:          70
    };

    this.$httpBackend.expectPOST(`${url}/user/load`, dataToSend, headers).respond(200, dataToSend);

    this.loadBookService.createLoad(dataToSend)
    .then( load => {
      expect(load).toEqual(dataToSend);
    })
    .catch(err => {
      expect(err).toBe(undefined);
    });
    this.$httpBackend.flush();
  });

});
