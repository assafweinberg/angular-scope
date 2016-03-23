// Angular module
// Central point for registering ui.router state routes

/* global angular */
'use strict';

angular.module('app.routes', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
      .when('', '/')
      .otherwise('/404');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'views/_layout.html',
        controller: 'AppController'
      })

      .state('app.notFound', {
        url: '/404',
        templateUrl: 'views/404.html'
      })

      .state('masterDetail', {
        abstract: true,
        url: '/',
        templateUrl: 'views/masterDetail/master.html',
        controller: 'MasterController',
        controllerAs: 'Master',
      })
      .state('masterDetail.details1', {
        url: '',
        templateUrl: 'views/masterDetail/detail1.html',
        controller: 'Details1Controller',
        controllerAs: 'Details1'
      })
      .state('masterDetail.details2', {
        url: '/masterDetail/details2',
        templateUrl: 'views/masterDetail/detail2.html',
        controller: 'Details2Controller',
        controllerAs: 'Details2'
      })

    ;
  }])

  .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])
;
