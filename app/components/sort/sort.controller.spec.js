describe('myApp', function () {
  'use strict';

  describe('components', function () {

    describe('sort', function () {

      describe('sort controller', function () {

        beforeEach(module('myApp.constants'));
        beforeEach(module('myApp.utils'));
        beforeEach(module('myApp.components.sort'));

        var SortController, $scope, sortFactory, mockEvent, sortForm, userInput;

        beforeEach(inject(function ($controller, $rootScope, _sortFactory_) {
          $scope = $rootScope.$new();
          sortFactory = _sortFactory_;
          SortController = $controller('SortController', {
            $scope: $scope,
            sortFactory: sortFactory
          });
        }));

        describe('Initialization', function () {

          it('should initialize the SortController with two methods exposed on it named `validateUserInput` and `processInput`.', function () {

            expect(SortController).toBeDefined();
            expect(angular.isFunction(SortController.validateUserInput)).toBeTruthy();
            expect(angular.isFunction(SortController.processInput)).toBeTruthy();

          });

        });

        describe('validateUserInput', function () {

          beforeEach(function () {
            mockEvent = new Event('keypress');
            spyOn(mockEvent, 'preventDefault');
            sortForm = {};
          });

          it('should set the `$submitted` property of sortForm to false in any case', function () {

            SortController.validateUserInput(mockEvent, sortForm);

            expect(sortForm.$submitted).toBeFalsy();

          });

          it('should call the event\'s `preventDefault` method when user enters a non numeric character', function () {

            mockEvent.which = 47;

            SortController.validateUserInput(mockEvent, sortForm);

            expect(mockEvent.preventDefault).toHaveBeenCalled();

          });

          it('should not call the event\'s `preventDefault` method when user enters a space character', function () {

            mockEvent.which = 32;

            SortController.validateUserInput(mockEvent, sortForm);

            expect(mockEvent.preventDefault).not.toHaveBeenCalled();

          });

          it('should not call the event\'s `preventDefault` method when user enters a numeric character', function () {

            mockEvent.which = 48;

            SortController.validateUserInput(mockEvent, sortForm);

            expect(mockEvent.preventDefault).not.toHaveBeenCalled();

          });

        });

        describe('processInput', function () {

          beforeEach(function () {
            sortForm = {};
          });

          it('should set an array of arrays created by the user input on the controller', function () {

            SortController.userInput = '2 8 4 6 9 3 1 7 15 10 12 11 14 5 13 0';
            var expectedInputMatrix = [
              ['2', '8', '4', '6'],
              ['9', '3', '1', '7'],
              ['15', '10', '12', '11'],
              ['14', '5', '13', '0']
            ];

            SortController.processInput(sortForm);

            expect(SortController.inputMatrix).toEqual(expectedInputMatrix);

          });

          it('should call `sortFactory.sortInputMatrix` with inputMatrix set on the controller', function () {

            SortController.userInput = '2 8 4 6 9 3 1 7 15 10 12 11 14 5 13 0';
            var inputMatrix = [
              ['2', '8', '4', '6'],
              ['9', '3', '1', '7'],
              ['15', '10', '12', '11'],
              ['14', '5', '13', '0']
            ];
            var validMatrix = [
              ['0', '1', '2', '3'],
              ['4', '5', '6', '7'],
              ['8', '9', '10', '11'],
              ['12', '13', '14', '15']
            ];
            spyOn(sortFactory, 'sortInputMatrix');

            SortController.processInput(sortForm);

            expect(sortFactory.sortInputMatrix).toHaveBeenCalledWith(inputMatrix);

          });

          it('should set `sortedMatrix` on the controller with the value as inputMatrix sorted', function () {

            SortController.userInput = '2 8 4 6 9 3 1 7 15 10 12 11 14 5 13 0';
            var sortedMatrix = [
              ['0', '1', '2', '3'],
              ['4', '5', '6', '7'],
              ['8', '9', '10', '11'],
              ['12', '13', '14', '15']
            ];
            spyOn(sortFactory, 'sortInputMatrix').and.returnValue(sortedMatrix);

            SortController.processInput(sortForm);

            expect(SortController.sortedMatrix).toEqual(sortedMatrix);

          });

          it('should set `errorMessage` on the controller and set $invalid on sortForm to true', function () {
            
            SortController.userInput = '2 8 4 6 9 3 1 7 15 10 12 11 14 5 13 1';
            var errorMessage = 'Either the input is invalid or there is a duplicate entry in the numbers!';
            spyOn(sortFactory, 'sortInputMatrix').and.callFake(function() {
              throw new Error('Userinput is not valid!');
            });

            SortController.processInput(sortForm);

            expect(SortController.errorMessage).toEqual(errorMessage);
            expect(sortForm.$invalid).toBeTruthy();

          });

        });

      });
    });

  });

});