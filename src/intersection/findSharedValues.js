/** .........
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */

export const findSharedValues = (array1 = [], array2 = []) => {
    const sharedValues = [];
    const array1Set = new Set(array1);
    for (const item of array2) {
        if (array1Set.has(item) && !sharedValues.includes(item)) {
            sharedValues.push(item);
        };
    };
    return sharedValues;
};
