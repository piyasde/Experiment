'use strict';

/* App Module */

angular.module('taskslist', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/tasks', {templateUrl: 'listtodo.html',   controller: TaskListCtrl}).
      otherwise({redirectTo: '/tasks'});
}]);