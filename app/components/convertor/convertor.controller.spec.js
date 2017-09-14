describe('myApp', function() {
  'use strict';

  describe('components', function() {

    describe('convertor', function() {

      describe('convertor controller', function() {

        beforeEach(module('app.constants'));
        beforeEach(module('myApp.utils'));
        beforeEach(module('myApp.components.convertor'));
        
        var ConvertorController, $scope, convertFactory, mockEvent;

        beforeEach(inject(function($controller, $rootScope, _convertFactory_) {
          $scope = $rootScope.$new();
          convertFactory = _convertFactory_;
          ConvertorController = $controller('ConvertorController', {
            $scope: $scope,
            convertFactory: convertFactory
          });
        }));

        describe('Initialization', function() {

          it('should initialize the ConvertorController with two methods on it named `convertToRomanNumber` and `validateUserInput`', function() {

            expect(ConvertorController).toBeDefined();
            expect(angular.isFunction(ConvertorController.convertToRomanNumber)).toBeTruthy();
            expect(angular.isFunction(ConvertorController.validateUserInput)).toBeTruthy();

          });

        });

        describe('convertToRomanNumber', function() {

          it('should set `invalidInput` to true and `convertedRomanNumber` to \'\' if `userInput` is greater than 3888', function() {

            ConvertorController.userInput = '3889';

            ConvertorController.convertToRomanNumber();

            expect(ConvertorController.invalidInput).toBeTruthy();
            expect(ConvertorController.convertedRomanNumber).toEqual('');

          });

          it('should call `convertFactory.convertToRomanNumber` with the userInput if `userInput` is less than 3888', function() {

            spyOn(convertFactory, 'convertToRomanNumber');
            ConvertorController.userInput = '3887';

            ConvertorController.convertToRomanNumber();

            expect(convertFactory.convertToRomanNumber).toHaveBeenCalledWith(ConvertorController.userInput);

          });

          it('should call `convertFactory.convertToRomanNumber` with the userInput if `userInput` is equal to 3888', function() {

            spyOn(convertFactory, 'convertToRomanNumber');
            ConvertorController.userInput = '3888';

            ConvertorController.convertToRomanNumber();

            expect(convertFactory.convertToRomanNumber).toHaveBeenCalledWith(ConvertorController.userInput);

          });

        });

        describe('validateUserInput', function() {

          beforeEach(function() {
            mockEvent = new Event('keypress');
            spyOn(mockEvent, 'preventDefault');
          });

          it('should call the event\'s `preventDefault` method when user enters a non numeric character', function() {

            mockEvent.which = 47;

            ConvertorController.validateUserInput(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();

          });

          it('should not call the event\'s `preventDefault` method when user enters a numeric character', function() {

            mockEvent.which = 48;

            ConvertorController.validateUserInput(mockEvent);

            expect(mockEvent.preventDefault).not.toHaveBeenCalled();

          });

          it('should call `convertFactory.convertToRomanNumber` with the userInput when user presses enter and the `userInput` value is less than 3888', function() {

            mockEvent.which = 13;
            spyOn(convertFactory, 'convertToRomanNumber');
            ConvertorController.userInput = '3887';

            ConvertorController.validateUserInput(mockEvent);

            expect(convertFactory.convertToRomanNumber).toHaveBeenCalledWith(ConvertorController.userInput);

          });

          it('should set `invalidInput` to true and `convertedRomanNumber` to \'\' if `userInput` is greater than 3888 and the user has pressed enter', function() {

            mockEvent.which = 13;
            ConvertorController.userInput = '3889';

            ConvertorController.validateUserInput(mockEvent);

            expect(ConvertorController.invalidInput).toBeTruthy();
            expect(ConvertorController.convertedRomanNumber).toEqual('');

          });



        });

      });
    });
  });
});