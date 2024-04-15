/** .........
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

export const splitObject = (toSeparate = {}) => {
    return Object.keys(toSeparate).map(key => ({ [key]: toSeparate[key] }));
};
