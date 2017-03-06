//alert("hello");
 
 

 var app = angular.module("calc",[]);

 app.controller("calc", function($scope){
 	
 	$scope.num1 = parseInt(document.getElementById('num1')); 		
 	$scope.num2 = parseInt(document.getElementById('num2'));
 
 });
