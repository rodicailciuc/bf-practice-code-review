/** .........
 * Creates an array of values that are in the first array, but not not in the second array.
 * Repeated values are not duplicated in the return value, and the order of 
 * result values are determined by the first array.
 * 
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [valuesToRemove=[]] - The values to remove.
 * @returns {Array} Returns the new array of filtered values.
 */

export const removeValuesArray = (array, valuesToRemove) => {
    const valuesSet = new Set(valuesToRemove);
    return array.filter(item => !valuesSet.has(item));
};
