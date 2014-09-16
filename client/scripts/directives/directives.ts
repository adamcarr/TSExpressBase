/// <reference path="../../typings/tsd.d.ts" />

module directives {
  var directivesModule = angular.module('directives', []);

  directivesModule.directive('test', [directives.Test.create]);
}