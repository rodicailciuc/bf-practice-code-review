import { sortNumbers } from "./sortNumbers.js";

describe('sortNumbers function', () => {
    test('sorts an array of numbers from smallest to largest', () => {
        const originalArray = [3, 1, 4, 1, 5, 9, 2, 6];
        const sortedArray = sortNumbers(originalArray);
        const expectedOutput = [1, 1, 2, 3, 4, 5, 6, 9];
        expect(sortedArray).toEqual(expectedOutput);
    });

    test('returns a new array without modifying the original array', () => {
        const originalArray = [3, 1, 4, 1, 5, 9, 2, 6];
        const sortedArray = sortNumbers(originalArray);
        // Ensure originalArray remains unmodified
        expect(originalArray).toEqual([3, 1, 4, 1, 5, 9, 2, 6]);
        // Ensure sortedArray is a new array
        expect(sortedArray).not.toBe(originalArray);
    });

    test('handles an empty array', () => {
        const originalArray = [];
        const sortedArray = sortNumbers(originalArray);
        const expectedOutput = [];
        expect(sortedArray).toEqual(expectedOutput);
    });

    test('handles an array with one element', () => {
        const originalArray = [5];
        const sortedArray = sortNumbers(originalArray);
        const expectedOutput = [5];
        expect(sortedArray).toEqual(expectedOutput);
    });

    test('handles an already sorted array', () => {
        const originalArray = [1, 2, 3, 4, 5];
        const sortedArray = sortNumbers(originalArray);
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(sortedArray).toEqual(expectedOutput);
    });
});
