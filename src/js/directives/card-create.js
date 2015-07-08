var app = angular.module('ruiComponents');

app.directive('ruiCardCreate', ['$compile', function ($compile) {
	return {
		restrict: 'E',
    transclude: true,
    templateUrl: 'templates/card-create.html',
		scope: {
      createFn: "&"
    },
    link: function($scope, $element, $attrs){
      $scope.create = function(){
        $scope.createFn({name: $scope.createinput});
        $scope.editing = false;
      }
    }
	};
}]);
