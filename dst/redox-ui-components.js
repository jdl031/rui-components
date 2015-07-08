angular.module('ruiComponents', []);

angular.module('ruiComponents').controller('ruiAppController', ['$scope', function($scope){
  $scope.helptextdata="data from controller";
  $scope.samplecreate = function(name){
    alert('create ' + name)
  }
}]);

var app = angular.module('ruiComponents');

app.directive('ruiComponents', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/_all.html',
		replace: true
	};
});
var app = angular.module('ruiComponents');

app.directive('ruiButton', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/button.html',
		replace: true,
		scope: {
      primary: '@',
      secondary: '@',
      caption: '@'
    }
	};
});
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

var app = angular.module('ruiComponents');

app.directive('ruiCard', ['$compile', function ($compile) {
	return {
		restrict: 'E',
    transclude: true,
    templateUrl: 'templates/card.html',
		scope: {
      ref: "@"
    },
    link: function(scope, element, attrs){

    }
	};
}]);

var app = angular.module('ruiComponents');

app.directive('ruiHelptext', ['$compile', function ($compile) {
	return {
		restrict: 'A',
		scope: {
      message: '@',
      data: '='
    },
    link: function(scope, element, attrs, ctrl, linker){
      if (scope.data){
        scope.message = scope.data;
      }
      element.append('<span ng-include="\'templates/helptext.html\'"></span>');
      $compile(element.contents())(scope);
    }
	};
}]);


angular.module('ruiComponents').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/_all.html',
    "<div ng-controller=\"ruiAppController\">\n" +
    "  <div>\n" +
    "    <h2>Buttons</h2>\n" +
    "    <rui-button primary=\"true\" caption=\"Primary\"></rui-button>\n" +
    "    <rui-button secondary=\"true\" caption=\"Secondary\"></rui-button>\n" +
    "    <rui-button caption=\"Default\"></rui-button>\n" +
    "  </div>\n" +
    "\t<div>\n" +
    "\t\t<h2>Help Text</h2>\n" +
    "\t\t<label rui-helptext message=\"This is the help text sample text for helping with the text of samples.\" style=\"font-size:30px;\">Chya</label>\n" +
    "    <br/>\n" +
    "\t\t<label rui-helptext data=\"helptextdata\" style=\"font-size:20px;\">Chya</label>\n" +
    "    <br>\n" +
    "    <label rui-helptext data=\"helptextdata\" style=\"font-size:40px;\">Chaa</label>\n" +
    "\t</div>\n" +
    "  <div>\n" +
    "    <h2>Cards</h2>\n" +
    "    <h4>rui-card</h4>\n" +
    "    <rui-card ref=\"dashboard.organization.index({orgId: org.id})\">\n" +
    "      Sample Organization 1\n" +
    "    </rui-card>\n" +
    "    <rui-card ref=\"dashboard.organization.index({orgId: org.id})\">\n" +
    "      Sample Organization 2\n" +
    "    </rui-card>\n" +
    "    <br>\n" +
    "    <div style=\"clear:both;\"></div>\n" +
    "    <h4>rui-card-create</h4>\n" +
    "    <rui-card-create create-fn=\"samplecreate(name)\">\n" +
    "      Create Organization\n" +
    "    </rui-card-create>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/button.html',
    "<button \n" +
    "\tng-class=\"primary ? 'rui-btn-primary' : (secondary) ? 'rui-btn-secondary' : 'rui-btn-default'\">\n" +
    "\t{{caption}}\n" +
    "</button>"
  );


  $templateCache.put('templates/card-create.html',
    "<a class=\"rui-card\">\n" +
    "\n" +
    "  <div class=\"card-box\" id=\"inputCard\" ng-show=\"editing\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <input type=\"text\" ng-model=\"createinput\" id=\"createinput\" name=\"createinput\" autofocus=\"true\"></input>\n" +
    "    </div>\n" +
    "    <div class=\"create-container\">\n" +
    "      <a ng-click=\"create()\">Create</a>\n" +
    "    </div>\n" +
    "    <div class=\"cancel-container\">\n" +
    "      <a ng-click=\"editing = !editing\"><span class=\"ion-close-circled\" style=\"font-size:12px;margin-right:2px;\"></span>cancel</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"card-box\" id=\"iconCard\" ng-hide=\"editing\" ng-click=\"editing = !editing\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <div class=\"card-create-icon ion-plus\"></div>\n" +
    "      <ng-transclude>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "</a>\n"
  );


  $templateCache.put('templates/card.html',
    "<a class=\"rui-card\" ui-sref={{ref}}>\n" +
    "  <div class=\"card-box\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <ng-transclude>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</a>\n"
  );


  $templateCache.put('templates/helptext.html',
    "<div class=\"rui-helptext-container\">\n" +
    "  <span class=\"rui-helptext-icon ion-help-circled\" ng-mouseover=\"showtooltip=true\" ng-mouseleave=\"showtooltip=false\" ng-click=\"clicked=!clicked\" >\n" +
    "    <span class=\"rui-tooltip\" ng-class=\"{'rui-hidden': (!(clicked || showtooltip))}\">{{message}}</span>\n" +
    "  </span>\n" +
    "  <!-- <a class=\"rui-helptext-icon ion-help-circled\"><div rui-tooltip-data='{{message}}'></div></a> -->\n" +
    "</div>\n"
  );

}]);
