/// <reference path="../../../typings/tsd.d.ts" />

module directives {
  export interface ITestScope extends ng.IScope {
    title: string;
  }

  export class Test {
    public static create(): ng.IDirective {
      return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs', directives.Test],
        template: mainCtrl.html
      };
    }

    constructor($scope: ITestScope, $element: ng.IRootElementService, $attrs: ng.IAttributes) {
      $scope.title = 'Test Directive Worked!';
    }
  }
}
