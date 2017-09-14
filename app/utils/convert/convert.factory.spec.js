describe('myApp', function() {
  'use strict';

  describe('utils', function() {

    describe('convert', function() {

      describe('convert factory', function() {

        // beforeEach(module('app.constants'));
        beforeEach(module('myApp.utils'));
        
        var convertFactory, userInput, result;

        beforeEach(inject(function(_convertFactory_) {
          convertFactory = _convertFactory_;
        }));

        describe('Initialization', function() {

          it('should initialize the convertFactory with one method on it named `convertToRomanNumber`', function() {

            expect(convertFactory).toBeDefined();
            expect(angular.isFunction(convertFactory.convertToRomanNumber)).toBeTruthy();

          });

        });

        describe('convertToRomanNumber', function() {

          it('should return IV for input value 4', () => {
            
            userInput = '4';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('IV');

          });

          it('should return LXX for input value 70', () => {

            userInput = '70';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('LXX');

          });

          it('should return XCV for input value 95', () => {

            userInput = '95';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('XCV');

          });

          it('should return LXX for input value 99', () => {

            userInput = '99';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('XCIX');

          });

          it('should return C for input value 100', () => {
            
            userInput = '100';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('C');

          });

          it('should return MCC for input value 1200', () => {

            userInput = '1200';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('MCC');

          });

          it('should return MMMDCCCLXXXVIII for input value 3888', () => {
            
            userInput = '3888';

            result = convertFactory.convertToRomanNumber(userInput);

            expect(result).toBe('MMMDCCCLXXXVIII');

          });

        });

      });
    });
  });
});