/** .........
 * 
 *
 * Converts a nested array into a single array with no nesting
 * It returns a new array and there are no side-effects
 * 
 * @param {Array} [nestedArray=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const flattenArray = (nestedArray) => {
    let result = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            result = result.concat(flattenArray(nestedArray[i]));
        } else {
            result.push(nestedArray[i]);
        };
    };

    return result;
};
