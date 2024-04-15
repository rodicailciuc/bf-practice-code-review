import { splitObject } from "./splitObject.js";

describe('splitObject function', () => {
    test('splits an object into an array of key/value pairs', () => {
        const inputObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const expectedResult = [
            { key1: 'value1' },
            { key2: 'value2' },
            { key3: 'value3' }
        ];
        expect(splitObject(inputObject)).toEqual(expectedResult);
    });

    test('returns an empty array for an empty object', () => {
        expect(splitObject({})).toEqual([]);
    });

    test('handles an object with one key/value pair', () => {
        const inputObject = { key: 'value' };
        const expectedResult = [{ key: 'value' }];
        expect(splitObject(inputObject)).toEqual(expectedResult);
    });

    test('handles an object with multiple key/value pairs', () => {
        const inputObject = { a: 1, b: 2, c: 3 };
        const expectedResult = [
            { a: 1 },
            { b: 2 },
            { c: 3 }
        ];
        expect(splitObject(inputObject)).toEqual(expectedResult);
    });
});
