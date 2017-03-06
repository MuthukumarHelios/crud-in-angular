console.log("hello");
var timelineApp1 = angular.module('timelineApp1',  []);

timelineApp1.controller('managerCtrl',function($scope){


$scope.manager=[
        {id:0+1, name: "pandi", age: 12, Address: "Poonamalle"},
        {id: 2, name: "raj", age: 14,Address: "Arumbakkam"},
        ];
$scope.addRow = function(){
    $scope.manager.push({id: $scope.manager.length+1, name: $scope.name, age: $scope.age, Address: $scope.Address});
};

$scope.deleteRow = function(mang){
       var index = $scope.manager.indexOf(mang)
    $scope.manager.splice(index)
}
$scope.updateRow = function(mang){
     var updateId = $scope.manager.indexof(mang)
     $scope.manager.push({id: updateId, name: $scope.name, age: $scope.age, Address: $scope.Address});
}
$scope.bindSelected = function(mang){
   // $scope.manager.id = mang.id;
    $scope.manager.name    =   mang.name;
    $scope.manager.age     =    mang.age;
    $scope.manager.Address = mang.Address;
}
})