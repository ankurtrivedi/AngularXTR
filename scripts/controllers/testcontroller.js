'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:TestcontrollerCtrl
 * @description
 * # TestcontrollerCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('TestcontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
