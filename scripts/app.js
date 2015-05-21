'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingApp
 * @description
 * # angularTrainingApp
 *
 * Main module of the application.
 */
angular
  .module('angularTrainingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test', {
        templateUrl: 'views/testView.html',
        controller: 'TestcontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
