angular.module('ruiComponents', []);

angular.module('ruiComponents').controller('ruiAppController', ['$scope', function($scope){
  $scope.helptextdata="data from controller";
  $scope.samplecreate = function(name){
    alert('create ' + name)
  }
}]);
