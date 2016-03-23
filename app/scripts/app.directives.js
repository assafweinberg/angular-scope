// Angular module
// Central point for registering angular directives

/* global angular */
'use strict';

angular.module('app.directives', [])

  .directive('sharedScopeDirective', function() {
    return {
      restrict: 'E',
      template: '<div style="background-color:DeepSkyBlue">Master Message: {{Master.vm.text}}</div>'
    };
  })
  .directive('isolateScopeDirective', function() {
    return {
      restrict: 'E',
      scope: {
        attributeProperty: '@',
        boundProperty: '=',
        parentFunction: '&'
      },
      template: `<div style="background-color:Coral">
                    Parent scope property: {{Master.user.firstName}} <br> 
                    Attribute Property:{{directiveCtrl.attributeProperty}}<br>
                    Bound Property: {{directiveCtrl.boundProperty}} <button ng-click="directiveCtrl.vm.update()">Update from directive</button><br>
                    Parent Function: <button ng-click="parentFunction()">Run Parent Function</button>
                  </div>`,

      controller: function($scope) {
        var vm = this.vm = {};
        
        vm.update = () =>{
          //Updating an object passed from a parent scope
          this.boundProperty = "updated";
        }
      },
      bindToController: true, //Needed to update boundProperty with controllerAs
      controllerAs: 'directiveCtrl'

    };
  });
;
