'use strict';

/* Controllers */
function TaskListCtrl($scope,$location) {

	$scope.save = function() {
      var tmpVar = {};
	  tmpVar.task = this.task;
	  this.task = '';
	  $scope.todos.push(tmpVar);
	  localStorage.setItem("todoList", JSON.stringify($scope.todos));
	  console.log($scope.todos.length);
	  $scope.list();
    };

	//Data Load
	$scope.list = function(){ 	
	  if(typeof $scope.todos ==='undefined')
	  {
		  //todolist = localStorage.getItem("todoList");
		  //console.log(localStorage.getItem("todoList"));
		  if(localStorage.getItem("todoList") ===null)
		  {
		  	$scope.todos = [];
		  }
		  else
		  {
		  	$scope.todos = JSON.parse(localStorage.getItem("todoList"));
		  }
	  } 
	  else
	  {
		  console.log('length'+$scope.todos.length);
	  }
	};
	
	$scope.clear = function(){ 	
		  $scope.todos = [];
		  localStorage.setItem("todoList", JSON.stringify($scope.todos));
	};
	
	$scope.list();
	if(!$scope.$$phase) {
		$scope.$apply();
	}
}



