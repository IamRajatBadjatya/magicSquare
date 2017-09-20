describe('myApp', function() {
  'use strict';

  describe('utils', function() {

    describe('sort', function() {

      describe('sort factory', function() {

        beforeEach(module('myApp.constants'));
        beforeEach(module('myApp.utils'));
        
        var sortFactory, inputMatrix, validMatrix;

        beforeEach(inject(function(_sortFactory_, _validMatrix_) {
          sortFactory = _sortFactory_;
          validMatrix = _validMatrix_;
        }));

        describe('Initialization', function() {

          it('should initialize the sortFactory with one method on it named `SortToRomanNumber`', function() {

            expect(sortFactory).toBeDefined();
            expect(angular.isFunction(sortFactory.sortInputMatrix)).toBeTruthy();

          });

        });

        describe('sortInputMatrix', function() {

          it('should return the valid matrix after sorting the inputMatrix', () => {
            
            inputMatrix = [
              ['2', '8', '4', '6'],
              ['9', '3', '1', '7'],
              ['15', '10', '12', '11'],
              ['14', '5', '13', '0']
            ];

            var result = sortFactory.sortInputMatrix(inputMatrix);

            expect(result).toEqual(validMatrix);

          });

        });

      });
    });
  });
});