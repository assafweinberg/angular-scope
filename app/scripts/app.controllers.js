// Angular module
// Central point for registering angular controllers

/* global angular */
'use strict';

angular.module('app.controllers', [])
  .controller('AppController', ['$log', '$window', '$rootScope', '$scope', 'APP_SETTINGS', function($log, $window, $rootScope, $scope, APP_SETTINGS){

  }])

  .controller('MasterController', function($scope, $q) {
    var vm = this.vm = {};
    vm.text = "Hello from Master";
  })

  .controller('Details1Controller', function($scope, $q) {
    var vm = this.vm = {};
    
    //I can set properties on the vm object
    vm.text = "Hello from Detail1"
    vm.numbers = [1,2,3];
    vm.updateMessage = function(){
      vm.text = "Updated Detail1 Message"
    }

    //I have access to my ancestor controllers by name using $scope
    console.log($scope.Master.vm.text)


    //I can reassign objects on vm and have the view re-render
    //DO NOT PUT VM PROPERTIES DIRECTLY ON THE CONTROLLER, ANGULAR WILL NOT RUN DIGEST WHEN YOU REPLACE THEM
    vm.replaceArray = function(){
      vm.numbers = [5,6,7]
    }



  })

  .controller('Details2Controller', function($scope, $q) {
    var vm = this.vm = {};

    vm.text = "Hello from Detail2"
  });