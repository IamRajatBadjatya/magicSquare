(function(angular) {
  
  'use strict';

  var baseRomanNumbers = [
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
  ];

  angular
      .module('app.constants', [])
      .constant('baseRomanNumbers', baseRomanNumbers);

})(window.angular);