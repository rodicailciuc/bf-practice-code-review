import { flattenArray } from './flattenArray.js';

describe('flattenArray', () => {
    test('flattens a simple nested array', () => {
        const input = [1, [2, 3], [4, [5, 6]]];
        const expectedOutput = [1, 2, 3, 4, 5, 6];
        expect(flattenArray(input)).toEqual(expectedOutput);
    });

    test('flattens an array with only one level of nesting', () => {
        const input = [1, 2, [3, 4], 5];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(flattenArray(input)).toEqual(expectedOutput);
    });

    test('flattens an empty array', () => {
        const input = [];
        const expectedOutput = [];
        expect(flattenArray(input)).toEqual(expectedOutput);
    });

    test('returns the same array if it is already flat', () => {
        const input = [1, 2, 3, 4, 5];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(flattenArray(input)).toEqual(expectedOutput);
    });
});
