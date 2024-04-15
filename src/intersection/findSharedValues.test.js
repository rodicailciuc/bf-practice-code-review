import { findSharedValues } from "./findSharedValues.js";

describe('findSharedValues function', () => {
    test('returns an array of shared values between two arrays', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [3, 4, 5, 6, 7];
        const expectedOutput = [3, 4, 5];
        expect(findSharedValues(array1, array2)).toEqual(expectedOutput);
    });

    test('handles empty arrays', () => {
        const array1 = [];
        const array2 = [1, 2, 3];
        const expectedOutput = [];
        expect(findSharedValues(array1, array2)).toEqual(expectedOutput);
    });

    test('handles arrays with no shared values', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const expectedOutput = [];
        expect(findSharedValues(array1, array2)).toEqual(expectedOutput);
    });

    test('handles arrays with repeated values', () => {
        const array1 = [1, 2, 2, 3];
        const array2 = [2, 2, 3, 4];
        const expectedOutput = [2, 3];
        expect(findSharedValues(array1, array2)).toEqual(expectedOutput);
    });

    test('returns an empty array if one of the input arrays is empty', () => {
        const array1 = [];
        const array2 = [1, 2, 3];
        const expectedOutput = [];
        expect(findSharedValues(array1, array2)).toEqual(expectedOutput);
    });
});
