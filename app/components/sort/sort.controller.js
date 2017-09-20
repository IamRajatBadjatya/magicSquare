(function (angular) {

  'use strict';

  function SortController(sortFactory) {

    var vm = this;
    var validArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    /* Private Methods */

    function createInputMatrix(inputArray) {
      var count = 0;
      vm.inputMatrix = new Array(4);
      for (var i = 0; i < 4; i++) {
        vm.inputMatrix[i] = new Array(4);
      }

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          vm.inputMatrix[i][j] = inputArray[count];
          count++;
        }
      }
    }

    /* Public Methods */
    function processInput(sortForm) {
      createInputMatrix(vm.userInput.trim().split(' '));
      try {
        vm.sortedMatrix = sortFactory.sortInputMatrix(angular.copy(vm.inputMatrix));
      } catch(e) {
        vm.errorMessage = 'Either the input is invalid or there is a duplicate entry in the numbers!';
        sortForm.$invalid = true;
      }
    }

    function validateUserInput(ev, sortForm) {
      if ((ev.which !== 32) && (ev.which < 48 || ev.which > 57)) {
        ev.preventDefault();
      }
      sortForm.$submitted = false;
    }

    /* View Bindings */
    vm.processInput = processInput;
    vm.validateUserInput = validateUserInput;
  }

  angular.module('myApp.components.sort')
    .controller('SortController', ['sortFactory', SortController]);

})(window.angular);