(function (angular) {
  
  'use strict';

  var sortComponent = {
    bindings: {},
    controller: 'SortController',
    controllerAs: 'vm',
    templateUrl: 'components/sort/sort.tpl.html'
  };

  angular.module('myApp.components.sort', [])
      .component('sort', sortComponent);

})(window.angular);