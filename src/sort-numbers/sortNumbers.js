/** .........
 * Arrays of numbers.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 * @returns {number[]} a new array with the same numbers, but sorted
 */

export const sortNumbers = (arrayOfNumbers) => {
    const newArray = arrayOfNumbers.slice();
    newArray.sort((a, b) => a - b);
    return newArray;
};
