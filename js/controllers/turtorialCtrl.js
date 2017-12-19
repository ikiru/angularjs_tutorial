angular.module("tutorialCtrlModule", [])

.controller("tutorialCtrl", ["$scope",  function($scope){

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = "Main Page";
        $scope.tutorialObject.suTitle = "Sub Title";

        $scope.tutorialObject.bindOutput = 2;
        $scope.timesTwo = function(){
              $scope.tutorialObject.bindOutput *=2;  
        }
    
}]);