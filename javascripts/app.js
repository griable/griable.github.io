'use strict';

var App;

App = angular.module('app', ['app.controllers']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    return $routeProvider.when('/', {
      resolve: {
        scrollTo: 'home'
      }
    }).when('/projects', {
      resolve: {
        scrollTo: 'projects'
      }
    }).otherwise({
      scrollTo: 'none'
    });
  }
]);
'use strict';

angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', function($scope) {
    console.log('jere1');
    return $scope.$on('$routeChangeStart', function(scope, next, current) {
      console.log('jere');
      return console.log('Changing from ' + angular.toJson(current) + ' to ' + angular.toJson(next));
    });
  }
]).controller('HomeCtrl', [
  '$scope', function($scope) {
    return console.log('ok');
  }
]).controller('ProjectsCtrl', [
  '$scope', function($scope) {
    return console.log('ok');
  }
]);
