(function (angular) {

  'use strict';

  function ConvertorController(convertFactory) {

    var vm = this;
    vm.userInput = '';
    vm.invalidInput = false;
    vm.convertedRomanNumber = '';

    function validateUserInput(ev) {

      if (ev.which < 48 || ev.which > 57) {
        ev.preventDefault();
      }

      if(ev.which === 13 ){
        vm.convertToRomanNumber();
      }

    }

    function convertToRomanNumber() {

      vm.invalidInput = false;
      if (+vm.userInput > 3888) {
        vm.invalidInput = true;
        vm.convertedRomanNumber = '';
      } else {
        vm.convertedRomanNumber = convertFactory.convertToRomanNumber(vm.userInput);
      }

    }

    vm.convertToRomanNumber = convertToRomanNumber;
    vm.validateUserInput =  validateUserInput;

  }

  angular.module('myApp.components.convertor')
    .controller('ConvertorController', ['convertFactory', ConvertorController]);

})(window.angular);