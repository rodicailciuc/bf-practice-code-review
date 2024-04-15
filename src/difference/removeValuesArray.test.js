import { removeValuesArray } from "./removeValuesArray.js";

describe('removeValuesArray', () => {
    test('removes specific values from an array', () => {
        const array = [1, 2, 3, 4, 5];
        const valuesToRemove = [2, 4];
        const expectedOutput = [1, 3, 5];
        expect(removeValuesArray(array, valuesToRemove)).toEqual(expectedOutput);
    });

    test('handles empty input array', () => {
        const array = [];
        const valuesToRemove = [2, 4];
        const expectedOutput = [];
        expect(removeValuesArray(array, valuesToRemove)).toEqual(expectedOutput);
    });

    test('handles empty valuesToRemove array', () => {
        const array = [1, 2, 3, 4, 5];
        const valuesToRemove = [];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(removeValuesArray(array, valuesToRemove)).toEqual(expectedOutput);
    });

    test('handles array with all values to remove', () => {
        const array = [1, 2, 3, 4, 5];
        const valuesToRemove = [1, 2, 3, 4, 5];
        const expectedOutput = [];
        expect(removeValuesArray(array, valuesToRemove)).toEqual(expectedOutput);
    });

    test('handles array with no values to remove', () => {
        const array = [1, 2, 3, 4, 5];
        const valuesToRemove = [6, 7, 8];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(removeValuesArray(array, valuesToRemove)).toEqual(expectedOutput);
    });
});
