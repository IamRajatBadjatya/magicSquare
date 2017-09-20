(function (angular) {

  'use strict';

  function sortFactory(validMatrix) {

    /* Private Methods */
    function arrangeMatrix(inputMatrix) {
      var matrixToReturn = new Array(4);
      for (var i = 0; i < 4; i++) {
        matrixToReturn[i] = new Array(4);
        for (var j = 0; j < 4; j++) {
          matrixToReturn[i][j] = inputMatrix[j][i];
        }
      }
      return matrixToReturn;
    }

    function findIndexOf(value, inputMatrix) {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (inputMatrix[i][j] === value)
            return { x: i, y: j };
        }
      }
    }

    /* Public Methods */
    function sortInputMatrix(inputMatrix) {

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          var obj = findIndexOf(validMatrix[i][j], inputMatrix);

          var x1 = obj.x;
          var y1 = obj.y;
          //move right
          while (y1 < i && x1 >= 0) {
            var temp = inputMatrix[x1][y1];
            inputMatrix[x1][y1] = inputMatrix[x1][y1 + 1];
            inputMatrix[x1][y1 + 1] = temp;
            y1++;
          }
          // move  bottom
          while (x1 < j && y1 >= 0) {
            var temp = inputMatrix[x1][y1];
            inputMatrix[x1][y1] = inputMatrix[x1 + 1][y1];
            inputMatrix[x1 + 1][y1] = temp;
            x1++;
          }
          // move left
          while (y1 > i && x1 <= 3) {
            var temp = inputMatrix[x1][y1];
            inputMatrix[x1][y1] = inputMatrix[x1][y1 - 1];
            inputMatrix[x1][y1 - 1] = temp;
            y1--;
          }
          // move  top
          while (x1 > j && y1 <= 3) {
            var temp = inputMatrix[x1][y1];
            inputMatrix[x1][y1] = inputMatrix[x1 - 1][y1];
            inputMatrix[x1 - 1][y1] = temp;
            x1--;

          }

        }

      }
      return arrangeMatrix(inputMatrix);
    }

    return {
      sortInputMatrix: sortInputMatrix
    };

  }

  angular.module('myApp.utils')
    .factory('sortFactory', ['validMatrix', sortFactory]);

})(window.angular);