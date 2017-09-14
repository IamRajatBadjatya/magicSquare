(function (angular) {
  
  'use strict';

  var convertorComponent = {
    bindings: {
      titleOfMyTpl: '='
    },
    controller: 'ConvertorController',
    controllerAs: 'vm',
    templateUrl: 'components/convertor/convertor.tpl.html'
  };

  angular.module('myApp.components.convertor', [])
      .component('convertor', convertorComponent);

})(window.angular);