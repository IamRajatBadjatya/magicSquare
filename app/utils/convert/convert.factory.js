(function (angular) {
  
  'use strict';

  function convertFactory(baseRomanNumbers) {
    
    function convertToRomanNumber(value) {

      var digits, romanNumber, count;
      digits = value.split('');
      romanNumber = '';
      //converting last three digits of number to roman
      for(count=2; count >= 0; count--){
        var key = +digits.pop() + (count * 10);
        romanNumber = (baseRomanNumbers[key] || '') + romanNumber;
      }
       
      //adding M for remaining digits
      if(digits.length >= 1){
        var romanNumber = new Array(+digits.pop()).fill('M').join('') + romanNumber;
      }
      return romanNumber;
    }

    return {
      convertToRomanNumber: convertToRomanNumber
    };

  }

  angular.module('myApp.utils')
      .factory('convertFactory', ['baseRomanNumbers', convertFactory]);

})(window.angular);